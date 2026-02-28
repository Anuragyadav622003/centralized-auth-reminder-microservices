import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { NotificationService } from './notification.service';
import { TemplateService } from './template.service';
import { NotificationChannel } from '@org/shared-types';

@Controller()
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly templateService: TemplateService,
  ) {}

  @MessagePattern({ cmd: 'health' })
  getHealth(): { status: string; service: string } {
    return { status: 'up', service: 'notification-service' };
  }

  @MessagePattern({ cmd: 'send_notification' })
  async sendNotification(@Payload() data: {
    tenantId: string;
    channel: NotificationChannel;
    recipient: string;
    subject?: string;
    content: string;
    templateId?: string;
    templateData?: Record<string, any>;
  }) {
    return this.notificationService.sendNotification(data);
  }

  @MessagePattern({ cmd: 'send_payment_reminder' })
  async sendPaymentReminder(@Payload() data: {
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
  }) {
    return this.notificationService.sendPaymentReminder(data);
  }

  @MessagePattern({ cmd: 'send_bulk_notifications' })
  async sendBulkNotifications(@Payload() data: {
    tenantId: string;
    notifications: Array<{
      channel: NotificationChannel;
      recipient: string;
      subject?: string;
      content: string;
      templateData?: Record<string, any>;
    }>;
  }) {
    return this.notificationService.sendBulkNotifications(data);
  }

  @MessagePattern({ cmd: 'get_notification_history' })
  async getNotificationHistory(@Payload() data: {
    tenantId: string;
    channel?: NotificationChannel;
    status?: string;
    startDate?: Date;
    endDate?: Date;
    limit?: number;
    offset?: number;
  }) {
    return this.notificationService.getNotificationHistory(data.tenantId, {
      channel: data.channel,
      status: data.status,
      startDate: data.startDate,
      endDate: data.endDate,
      limit: data.limit,
      offset: data.offset,
    });
  }

  @MessagePattern({ cmd: 'get_notification_status' })
  async getNotificationStatus(@Payload() data: { notificationId: string }) {
    return this.notificationService.getNotificationStatus(data.notificationId);
  }

  @MessagePattern({ cmd: 'get_queue_status' })
  async getQueueStatus() {
    return this.notificationService.getQueueStatus();
  }

  @MessagePattern({ cmd: 'get_templates' })
  async getTemplates(@Payload() data: { tenantId: string }) {
    return this.templateService.getTemplatesByTenant(data.tenantId);
  }

  @MessagePattern({ cmd: 'get_template' })
  async getTemplate(@Payload() data: {
    tenantId: string;
    type: string;
    channel: NotificationChannel;
  }) {
    return this.templateService.getTemplate(data.tenantId, data.type, data.channel);
  }

  @MessagePattern({ cmd: 'is_service_configured' })
  async isServiceConfigured(@Payload() data: { channel: NotificationChannel }) {
    return { configured: this.notificationService.isServiceConfigured(data.channel) };
  }
}
