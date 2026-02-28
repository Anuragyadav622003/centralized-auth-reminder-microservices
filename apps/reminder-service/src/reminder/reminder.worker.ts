import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { Reminder, ReminderDocument } from '../shared/reminder.schema';
import { BullmqService, ReminderJobData } from '../shared/bullmq.service';
import { ReminderStatus, NotificationChannel, ReminderMethod } from '@org/shared-types';


@Injectable()
export class ReminderWorker implements OnModuleInit {
  private readonly logger = new Logger(ReminderWorker.name);

  constructor(
    @InjectModel(Reminder.name) private reminderModel: Model<ReminderDocument>,
    private readonly bullmqService: BullmqService,
    @Inject('NOTIFICATION_SERVICE') private notificationClient: ClientProxy,
  ) {}

  onModuleInit() {
    this.startWorker();
    this.logger.log('Reminder worker initialized');
  }

  private startWorker(): void {
    this.bullmqService.createWorker<ReminderJobData>(
      'reminders',
      async (job) => {
        this.logger.log(`Processing reminder job: ${job.id}`);
        await this.processReminder(job.data);
      },
      {
        concurrency: 5,
      },
    );
  }

  private async processReminder(data: ReminderJobData): Promise<void> {
    const { reminderId, invoiceId, method, attempt, maxAttempts } = data;

    this.logger.log(`Processing reminder ${reminderId} for invoice ${invoiceId}`);

    // Get reminder details from database
    const reminder = await this.reminderModel.findById(reminderId);
    if (!reminder) {
      this.logger.error(`Reminder ${reminderId} not found`);
      return;
    }

    // Check if reminder was cancelled
    if (reminder.status === ReminderStatus.CANCELLED) {
      this.logger.log(`Reminder ${reminderId} was cancelled, skipping`);
      return;
    }

    // Check if invoice was already paid
    // This would typically check via an event or API call to tenant service
    // For now, we'll proceed with sending

    try {
      // Send notification via notification service
      const result = await this.sendNotification(reminder, method);

      if (result.success) {
        // Update reminder status to sent
        await this.reminderModel.findByIdAndUpdate(reminderId, {
          status: ReminderStatus.SENT,
          sentAt: new Date(),
        });

        this.logger.log(`Reminder ${reminderId} sent successfully`);

      } else {
        throw new Error(result.error || 'Failed to send notification');
      }
    } catch (error: any) {
      this.logger.error(`Failed to send reminder ${reminderId}:`, error.message);

      const newAttempt = attempt + 1;
      const shouldRetry = newAttempt < maxAttempts;

      // Update reminder with failure info
      await this.reminderModel.findByIdAndUpdate(reminderId, {
        attempt: newAttempt,
        errorMessage: error.message,
        status: shouldRetry ? ReminderStatus.PENDING : ReminderStatus.FAILED,
      });

      if (shouldRetry) {
        // Retry with exponential backoff
        const backoffDelay = Math.pow(2, newAttempt) * 60 * 1000; // 2, 4, 8 minutes
        this.logger.log(`Retrying reminder ${reminderId} in ${backoffDelay}ms (attempt ${newAttempt})`);

        await this.bullmqService.addReminderJob(
          {
            ...data,
            attempt: newAttempt,
          },
          backoffDelay,
        );
      } else {
        this.logger.error(`Reminder ${reminderId} failed after ${maxAttempts} attempts`);

        // Emit failure event
        // TODO: Emit ReminderFailedEvent to event bus
        // const event = new ReminderFailedEvent(...)
      }

      throw error; // Trigger BullMQ retry mechanism
    }
  }

  private async sendNotification(
    reminder: ReminderDocument,
    method: ReminderMethod,
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    const metadata = reminder.metadata;
    if (!metadata) {
      return { success: false, error: 'Reminder metadata not found' };
    }

    const channel = method === 'EMAIL' ? NotificationChannel.EMAIL : NotificationChannel.WHATSAPP;
    const recipient = method === 'EMAIL' ? metadata.clientEmail : metadata.clientPhone;

    if (!recipient) {
      return { success: false, error: `No ${method.toLowerCase()} recipient found` };
    }

    try {
      // Call notification service via TCP
      const result = await lastValueFrom(
        this.notificationClient.send({ cmd: 'send_payment_reminder' }, {
          tenantId: reminder.tenantId,
          clientId: reminder.clientId,
          clientName: metadata.clientName,
          clientEmail: metadata.clientEmail,
          clientPhone: metadata.clientPhone,
          invoiceNumber: metadata.invoiceNumber,
          amount: metadata.amount,
          currency: metadata.currency,
          dueDate: new Date(), // This should come from invoice data
          paymentLink: metadata.paymentLink,
          reminderType: reminder.type,
          channels: [channel],
        }),
      );

      return result;
    } catch (error: any) {
      this.logger.error('Notification service error:', error.message);
      return { success: false, error: error.message };
    }
  }

  /**
   * Process a reminder immediately (manual trigger)
   */
  async processReminderImmediately(reminderId: string): Promise<void> {
    const reminder = await this.reminderModel.findById(reminderId);
    if (!reminder) {
      throw new Error('Reminder not found');
    }

    if (reminder.status !== ReminderStatus.PENDING) {
      throw new Error('Can only process pending reminders');
    }

    await this.processReminder({
      reminderId: reminder._id.toString(),
      invoiceId: reminder.invoiceId,
      tenantId: reminder.tenantId,
      clientId: reminder.clientId,
      type: reminder.type,
      method: reminder.method,
      attempt: reminder.attempt,
      maxAttempts: reminder.maxAttempts,
    });
  }

  /**
   * Get queue metrics
   */
  async getQueueMetrics(): Promise<any> {
    return this.bullmqService.getQueueMetrics('reminders');
  }
}
