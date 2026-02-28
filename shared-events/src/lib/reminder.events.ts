/**
 * Reminder Events
 * Events related to reminder scheduling and delivery
 */

import { ReminderMethod, ReminderType } from '@org/shared-types';

export class ReminderScheduledEvent {
  constructor(
    public readonly reminderId: string,
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly clientId: string,
    public readonly type: ReminderType,
    public readonly method: ReminderMethod,
    public readonly scheduledAt: Date,
    public readonly scheduledFor: Date,
  ) {}
}

export class ReminderCancelledEvent {
  constructor(
    public readonly reminderId: string,
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly reason: string,
    public readonly cancelledAt: Date = new Date(),
  ) {}
}

export class ReminderSentEvent {
  constructor(
    public readonly reminderId: string,
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly clientId: string,
    public readonly type: ReminderType,
    public readonly method: ReminderMethod,
    public readonly recipient: string,
    public readonly sentAt: Date = new Date(),
    public readonly providerResponse?: any,
  ) {}
}

export class ReminderFailedEvent {
  constructor(
    public readonly reminderId: string,
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly clientId: string,
    public readonly type: ReminderType,
    public readonly method: ReminderMethod,
    public readonly recipient: string,
    public readonly errorMessage: string,
    public readonly attempt: number,
    public readonly maxAttempts: number,
    public readonly willRetry: boolean,
    public readonly failedAt: Date = new Date(),
  ) {}
}

export class ReminderDeliveredEvent {
  constructor(
    public readonly reminderId: string,
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly deliveredAt: Date,
    public readonly deliveryStatus: string,
  ) {}
}

export class ReminderOpenedEvent {
  constructor(
    public readonly reminderId: string,
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly openedAt: Date,
    public readonly ipAddress?: string,
    public readonly userAgent?: string,
  ) {}
}

export class ReminderRescheduledEvent {
  constructor(
    public readonly reminderId: string,
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly previousScheduledAt: Date,
    public readonly newScheduledAt: Date,
    public readonly reason?: string,
    public readonly rescheduledAt: Date = new Date(),
  ) {}
}

export class BulkRemindersScheduledEvent {
  constructor(
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly reminderCount: number,
    public readonly scheduledAt: Date = new Date(),
  ) {}
}

export class AllRemindersCancelledEvent {
  constructor(
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly reason: string,
    public readonly cancelledCount: number,
    public readonly cancelledAt: Date = new Date(),
  ) {}
}
