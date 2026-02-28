import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../shared/prisma.service';
import { QueueService, NotificationJobData } from '../shared/queue.service';
import { WhatsAppService } from './whatsapp.service';
import { EmailService } from './email.service';
import { TemplateService } from './template.service';
import { NotificationChannel } from '../generated/prisma';

@Injectable()
export class NotificationService implements OnModuleInit {
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly queueService: QueueService,
    private readonly whatsAppService: WhatsAppService,
    private readonly emailService: EmailService,
    private readonly templateService: TemplateService,
  ) {}

  async onModuleInit() {
    // Start the queue worker
    this.queueService.createWorker(async (job) => {
      this.logger.log(`Processing notification job: ${job.id}`);
      await this.processNotificationJob(job.data);
    });

    this.logger.log('Notification service initialized with queue worker');
  }

  async sendNotification(data: {
    tenantId: string;
    channel: NotificationChannel;
    recipient: string;
    subject?: string;
    content: string;
    templateId?: string;
    templateData?: Record<string, any>;
    priority?: number;
  }): Promise<{ success: boolean; notificationId?: string; error?: string }> {
    try {
      // Create notification record
      const notification = await this.prisma.notificationLog.create({
        data: {
          tenantId: data.tenantId,
          type: 'GENERAL',
          channel: data.channel,
          recipient: data.recipient,
          subject: data.subject,
          content: data.content,
          templateId: data.templateId,
          templateData: data.templateData ? JSON.stringify(data.templateData) : null,
          status: 'PENDING',
        },
      });

      // Add to queue
      await this.queueService.addNotificationJob({
        id: notification.id,
        tenantId: data.tenantId,
        channel: data.channel,
        recipient: data.recipient,
        subject: data.subject,
        content: data.content,
        templateId: data.templateId,
        templateData: data.templateData,
      }, {
        priority: data.priority,
      });

      this.logger.log(`Notification queued: ${notification.id}`);

      return { success: true, notificationId: notification.id };
    } catch (error: any) {
      this.logger.error('Failed to queue notification:', error);
      return { success: false, error: error.message };
    }
  }

  async sendPaymentReminder(data: {
    tenantId: string;
    clientId: string;
    clientName: string;
    clientEmail?: string;
    clientPhone?: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    dueDate: Date;
    paymentLink?: string;
    reminderType: string;
    channels?: NotificationChannel[];
  }): Promise<{ success: boolean; results: any[] }> {
    const results = [];
    const channels = data.channels || [NotificationChannel.EMAIL];

    const templateData = {
      clientName: data.clientName,
      invoiceNumber: data.invoiceNumber,
      amount: data.amount.toString(),
      currency: data.currency,
      dueDate: data.dueDate.toLocaleDateString(),
      paymentLink: data.paymentLink || '',
      companyName: 'PayPulse',
    };

    for (const channel of channels) {
      try {
        const template = await this.templateService.getTemplate(
          data.tenantId,
          data.reminderType,
          channel,
        );

        if (!template) {
          results.push({ channel, success: false, error: 'Template not found' });
          continue;
        }

        const rendered = this.templateService.renderTemplate(template, templateData);
        const recipient = channel === NotificationChannel.EMAIL ? data.clientEmail : data.clientPhone;

        if (!recipient) {
          results.push({ channel, success: false, error: 'No recipient for channel' });
          continue;
        }

        const result = await this.sendNotification({
          tenantId: data.tenantId,
          channel,
          recipient,
          subject: rendered.subject,
          content: rendered.content,
          templateId: template.id,
          templateData,
        });

        results.push({ channel, ...result });
      } catch (error: any) {
        results.push({ channel, success: false, error: error.message });
      }
    }

    return {
      success: results.some((r) => r.success),
      results,
    };
  }

  async sendBulkNotifications(data: {
    tenantId: string;
    notifications: Array<{
      channel: NotificationChannel;
      recipient: string;
      subject?: string;
      content: string;
      templateData?: Record<string, any>;
    }>;
  }): Promise<{ success: boolean; queued: number; failed: number }> {
    let queued = 0;
    let failed = 0;

    for (const notification of data.notifications) {
      try {
        await this.sendNotification({
          tenantId: data.tenantId,
          ...notification,
        });
        queued++;
      } catch (error) {
        failed++;
      }
    }

    return {
      success: failed === 0,
      queued,
      failed,
    };
  }

  private async processNotificationJob(data: NotificationJobData): Promise<void> {
    this.logger.log(`Processing notification: ${data.id} via ${data.channel}`);

    let result: { success: boolean; messageId?: string; error?: string };

    switch (data.channel) {
      case NotificationChannel.WHATSAPP:
        result = await this.whatsAppService.sendMessage(
          data.recipient,
          data.content,
        );
        break;

      case NotificationChannel.EMAIL:
        result = await this.emailService.sendEmail({
          to: data.recipient,
          subject: data.subject || '',
          html: data.content,
        });
        break;

      default:
        result = { success: false, error: `Unsupported channel: ${data.channel}` };
    }

    // Update notification status
    await this.prisma.notificationLog.update({
      where: { id: data.id },
      data: {
        status: result.success ? 'SENT' : 'FAILED',
        sentAt: result.success ? new Date() : null,
        errorMessage: result.error || null,
        providerResponse: result.messageId || null,
      },
    });

    if (result.success) {
      this.logger.log(`Notification sent successfully: ${data.id}`);
    } else {
      this.logger.error(`Failed to send notification ${data.id}: ${result.error}`);
      throw new Error(result.error); // Trigger retry
    }
  }

  async getNotificationHistory(
    tenantId: string,
    options?: {
      channel?: NotificationChannel;
      status?: string;
      startDate?: Date;
      endDate?: Date;
      limit?: number;
      offset?: number;
    },
  ): Promise<any[]> {
    const where: any = { tenantId };

    if (options?.channel) {
      where.channel = options.channel;
    }

    if (options?.status) {
      where.status = options.status;
    }

    if (options?.startDate || options?.endDate) {
      where.createdAt = {};
      if (options.startDate) {
        where.createdAt.gte = options.startDate;
      }
      if (options.endDate) {
        where.createdAt.lte = options.endDate;
      }
    }

    return this.prisma.notificationLog.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: options?.limit || 50,
      skip: options?.offset || 0,
    });
  }

  async getNotificationStatus(notificationId: string): Promise<any> {
    return this.prisma.notificationLog.findUnique({
      where: { id: notificationId },
    });
  }

  async getQueueStatus(): Promise<any> {
    return this.queueService.getQueueMetrics();
  }

  isServiceConfigured(channel: NotificationChannel): boolean {
    switch (channel) {
      case NotificationChannel.WHATSAPP:
        return this.whatsAppService.isConfigured();
      case NotificationChannel.EMAIL:
        return this.emailService.isConfigured();
      default:
        return false;
    }
  }
}
