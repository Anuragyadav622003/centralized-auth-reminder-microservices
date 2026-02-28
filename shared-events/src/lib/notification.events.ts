/**
 * Notification Events
 * Events related to notification delivery
 */

import { NotificationChannel } from '@org/shared-types';

export class NotificationSentEvent {
  constructor(
    public readonly notificationId: string,
    public readonly tenantId: string,
    public readonly channel: NotificationChannel,
    public readonly recipient: string,
    public readonly type: string,
    public readonly sentAt: Date = new Date(),
  ) {}
}

export class NotificationDeliveredEvent {
  constructor(
    public readonly notificationId: string,
    public readonly tenantId: string,
    public readonly channel: NotificationChannel,
    public readonly deliveredAt: Date,
    public readonly providerResponse?: any,
  ) {}
}

export class NotificationFailedEvent {
  constructor(
    public readonly notificationId: string,
    public readonly tenantId: string,
    public readonly channel: NotificationChannel,
    public readonly recipient: string,
    public readonly errorMessage: string,
    public readonly failedAt: Date = new Date(),
  ) {}
}

export class NotificationOpenedEvent {
  constructor(
    public readonly notificationId: string,
    public readonly tenantId: string,
    public readonly channel: NotificationChannel,
    public readonly openedAt: Date,
    public readonly ipAddress?: string,
    public readonly userAgent?: string,
  ) {}
}

export class SendNotificationRequestEvent {
  constructor(
    public readonly requestId: string,
    public readonly tenantId: string,
    public readonly channel: NotificationChannel,
    public readonly recipient: string,
    public readonly subject: string,
    public readonly content: string,
    public readonly templateData?: Record<string, any>,
    public readonly requestedAt: Date = new Date(),
  ) {}
}

export class TemplateUpdatedEvent {
  constructor(
    public readonly templateId: string,
    public readonly tenantId: string,
    public readonly name: string,
    public readonly channel: NotificationChannel,
    public readonly updatedById: string,
    public readonly updatedAt: Date = new Date(),
  ) {}
}
