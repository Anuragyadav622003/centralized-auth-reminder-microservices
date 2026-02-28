import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reminder, ReminderDocument } from '../shared/reminder.schema';
import { BullmqService } from '../shared/bullmq.service';
import { ReminderType, ReminderStatus, ReminderMethod } from '@org/shared-types';

@Injectable()
export class ReminderScheduler {
  private readonly logger = new Logger(ReminderScheduler.name);

  constructor(
    @InjectModel(Reminder.name) private reminderModel: Model<ReminderDocument>,
    private readonly bullmqService: BullmqService,
  ) {}

  /**
   * Run every minute to check for due reminders
   */
  @Cron(CronExpression.EVERY_MINUTE)
  async processDueReminders(): Promise<void> {
    this.logger.debug('Checking for due reminders...');

    const now = new Date();
    const fiveMinutesFromNow = new Date(now.getTime() + 5 * 60 * 1000);

    // Find reminders that are due within the next 5 minutes
    const dueReminders = await this.reminderModel.find({
      scheduledAt: {
        $lte: fiveMinutesFromNow,
        $gte: now,
      },
      status: ReminderStatus.PENDING,
    }).exec();

    this.logger.log(`Found ${dueReminders.length} reminders due for processing`);

    for (const reminder of dueReminders) {
      await this.queueReminder(reminder);
    }
  }

  /**
   * Run every hour to schedule new reminders for invoices
   */
  @Cron(CronExpression.EVERY_HOUR)
  async scheduleNewReminders(): Promise<void> {
    this.logger.debug('Scheduling new reminders...');

    // This would typically be triggered by invoice creation events
    // For now, we'll handle it through the event-driven architecture
  }

  /**
   * Run daily at midnight to mark overdue reminders
   */
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async processOverdueReminders(): Promise<void> {
    this.logger.debug('Processing overdue reminders...');

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    // Mark reminders that were never sent as failed
    const result = await this.reminderModel.updateMany(
      {
        scheduledAt: { $lt: yesterday },
        status: ReminderStatus.PENDING,
      },
      {
        $set: {
          status: ReminderStatus.FAILED,
          errorMessage: 'Reminder expired without being sent',
        },
      },
    );

    if (result.modifiedCount > 0) {
      this.logger.log(`Marked ${result.modifiedCount} reminders as failed`);
    }
  }

  /**
   * Schedule reminders for a new invoice
   */
  async scheduleRemindersForInvoice(data: {
    invoiceId: string;
    tenantId: string;
    clientId: string;
    clientName: string;
    clientEmail?: string;
    clientPhone?: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    dueDate: Date;
    reminderIntervals?: number[];
  }): Promise<void> {
    const intervals = data.reminderIntervals || [-3, 0, 3, 7]; // Days relative to due date
    const dueDate = new Date(data.dueDate);

    this.logger.log(`Scheduling reminders for invoice ${data.invoiceId} with intervals: ${intervals}`);

    for (const interval of intervals) {
      const scheduledAt = new Date(dueDate);
      scheduledAt.setDate(scheduledAt.getDate() + interval);

      // Skip if scheduled time is in the past
      if (scheduledAt < new Date()) {
        this.logger.warn(`Skipping reminder with interval ${interval} - already in the past`);
        continue;
      }

      // Determine reminder type based on interval
      let type: ReminderType;
      if (interval < 0) {
        type = ReminderType.PRE_DUE;
      } else if (interval === 0) {
        type = ReminderType.DUE_DATE;
      } else if (interval <= 3) {
        type = ReminderType.OVERDUE_3;
      } else if (interval <= 7) {
        type = ReminderType.OVERDUE_7;
      } else {
        type = ReminderType.FINAL;
      }

      // Create email reminder
      if (data.clientEmail) {
        await this.createReminder({
          ...data,
          type,
          method: ReminderMethod.EMAIL,
          scheduledAt,
        });
      }

      // Create WhatsApp reminder
      if (data.clientPhone) {
        await this.createReminder({
          ...data,
          type,
          method: ReminderMethod.WHATSAPP,
          scheduledAt,
        });
      }
    }

    this.logger.log(`Scheduled reminders for invoice ${data.invoiceId}`);
  }

  /**
   * Cancel all pending reminders for an invoice
   */
  async cancelRemindersForInvoice(invoiceId: string): Promise<number> {
    const result = await this.reminderModel.updateMany(
      {
        invoiceId,
        status: ReminderStatus.PENDING,
      },
      {
        $set: {
          status: ReminderStatus.CANCELLED,
        },
      },
    );

    // Also remove from BullMQ queue
    const reminders = await this.reminderModel.find({
      invoiceId,
      status: ReminderStatus.CANCELLED,
    });

    for (const reminder of reminders) {
      await this.bullmqService.removeReminderJob(reminder._id.toString());
    }

    this.logger.log(`Cancelled ${result.modifiedCount} reminders for invoice ${invoiceId}`);
    return result.modifiedCount;
  }

  /**
   * Reschedule a reminder
   */
  async rescheduleReminder(
    reminderId: string,
    newScheduledAt: Date,
    reason?: string,
  ): Promise<void> {
    const reminder = await this.reminderModel.findById(reminderId);
    if (!reminder) {
      throw new Error('Reminder not found');
    }

    if (reminder.status !== ReminderStatus.PENDING) {
      throw new Error('Can only reschedule pending reminders');
    }

    const previousScheduledAt = reminder.scheduledAt;

    await this.reminderModel.findByIdAndUpdate(reminderId, {
      scheduledAt: newScheduledAt,
    });

    // Update in BullMQ queue
    await this.bullmqService.removeReminderJob(reminderId);
    await this.queueReminder({
      _id: reminder._id,
      invoiceId: reminder.invoiceId,
      tenantId: reminder.tenantId,
      clientId: reminder.clientId,
      type: reminder.type,
      method: reminder.method,
      scheduledAt: newScheduledAt,
      attempt: reminder.attempt,
      maxAttempts: reminder.maxAttempts,
    });

    this.logger.log(
      `Rescheduled reminder ${reminderId} from ${previousScheduledAt} to ${newScheduledAt}${reason ? ` (${reason})` : ''}`,
    );
  }

  private async createReminder(data: {
    invoiceId: string;
    tenantId: string;
    clientId: string;
    clientName: string;
    clientEmail?: string;
    clientPhone?: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    type: ReminderType;
    method: ReminderMethod;
    scheduledAt: Date;
  }): Promise<void> {
    const reminder = new this.reminderModel({
      invoiceId: data.invoiceId,
      tenantId: data.tenantId,
      clientId: data.clientId,
      type: data.type,
      method: data.method,
      scheduledAt: data.scheduledAt,
      status: ReminderStatus.PENDING,
      attempt: 0,
      maxAttempts: 3,
      metadata: {
        invoiceNumber: data.invoiceNumber,
        amount: data.amount,
        currency: data.currency,
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        clientPhone: data.clientPhone,
      },
    });

    await reminder.save();

    // Calculate delay for BullMQ
    const now = new Date();
    const delay = Math.max(0, data.scheduledAt.getTime() - now.getTime());

    // Add to BullMQ queue
    await this.bullmqService.addReminderJob(
      {
        reminderId: reminder._id.toString(),
        invoiceId: data.invoiceId,
        tenantId: data.tenantId,
        clientId: data.clientId,
        type: data.type,
        method: data.method,
        attempt: 0,
        maxAttempts: 3,
      },
      delay,
    );

    this.logger.debug(
      `Created ${data.method} reminder (${data.type}) for invoice ${data.invoiceId} scheduled at ${data.scheduledAt}`,
    );
  }

  private async queueReminder(reminder: { _id: { toString(): string }; scheduledAt: Date; invoiceId: string; tenantId: string; clientId: string; type: ReminderType; method: ReminderMethod; attempt: number; maxAttempts: number }): Promise<void> {
    const delay = Math.max(0, reminder.scheduledAt.getTime() - Date.now());

    await this.bullmqService.addReminderJob(
      {
        reminderId: reminder._id.toString(),
        invoiceId: reminder.invoiceId,
        tenantId: reminder.tenantId,
        clientId: reminder.clientId,
        type: reminder.type,
        method: reminder.method,
        attempt: reminder.attempt,
        maxAttempts: reminder.maxAttempts,
      },
      delay,
    );

    this.logger.debug(`Queued reminder ${reminder._id} with delay ${delay}ms`);
  }

  /**
   * Get reminder statistics for a tenant
   */
  async getReminderStats(tenantId: string): Promise<{
    total: number;
    pending: number;
    sent: number;
    failed: number;
    cancelled: number;
  }> {
    const [total, pending, sent, failed, cancelled] = await Promise.all([
      this.reminderModel.countDocuments({ tenantId }),
      this.reminderModel.countDocuments({ tenantId, status: ReminderStatus.PENDING }),
      this.reminderModel.countDocuments({ tenantId, status: ReminderStatus.SENT }),
      this.reminderModel.countDocuments({ tenantId, status: ReminderStatus.FAILED }),
      this.reminderModel.countDocuments({ tenantId, status: ReminderStatus.CANCELLED }),
    ]);

    return { total, pending, sent, failed, cancelled };
  }
}
