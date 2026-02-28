/**
 * Tenant Events
 * Events related to tenant lifecycle and subscription
 */

import { SubscriptionPlan, SubscriptionStatus } from '@org/shared-types';

export class TenantCreatedEvent {
  constructor(
    public readonly tenantId: string,
    public readonly name: string,
    public readonly slug: string,
    public readonly ownerId: string,
    public readonly ownerEmail: string,
    public readonly plan: SubscriptionPlan,
    public readonly createdAt: Date = new Date(),
  ) {}
}

export class TenantUpdatedEvent {
  constructor(
    public readonly tenantId: string,
    public readonly updatedFields: string[],
    public readonly previousValues?: Record<string, any>,
    public readonly updatedAt: Date = new Date(),
  ) {}
}

export class TenantDeactivatedEvent {
  constructor(
    public readonly tenantId: string,
    public readonly reason: string,
    public readonly deactivatedAt: Date = new Date(),
  ) {}
}

export class TenantReactivatedEvent {
  constructor(
    public readonly tenantId: string,
    public readonly reactivatedAt: Date = new Date(),
  ) {}
}

export class SubscriptionCreatedEvent {
  constructor(
    public readonly subscriptionId: string,
    public readonly tenantId: string,
    public readonly plan: SubscriptionPlan,
    public readonly status: SubscriptionStatus,
    public readonly currentPeriodStart: Date,
    public readonly currentPeriodEnd: Date,
    public readonly createdAt: Date = new Date(),
  ) {}
}

export class SubscriptionChangedEvent {
  constructor(
    public readonly subscriptionId: string,
    public readonly tenantId: string,
    public readonly previousPlan: SubscriptionPlan,
    public readonly newPlan: SubscriptionPlan,
    public readonly changeType: 'upgrade' | 'downgrade' | 'renewal',
    public readonly effectiveDate: Date,
    public readonly changedAt: Date = new Date(),
  ) {}
}

export class SubscriptionCancelledEvent {
  constructor(
    public readonly subscriptionId: string,
    public readonly tenantId: string,
    public readonly plan: SubscriptionPlan,
    public readonly cancelAtPeriodEnd: boolean,
    public readonly cancellationDate?: Date,
    public readonly cancelledAt: Date = new Date(),
  ) {}
}

export class SubscriptionRenewedEvent {
  constructor(
    public readonly subscriptionId: string,
    public readonly tenantId: string,
    public readonly plan: SubscriptionPlan,
    public readonly previousPeriodEnd: Date,
    public readonly newPeriodEnd: Date,
    public readonly renewedAt: Date = new Date(),
  ) {}
}

export class SubscriptionPaymentFailedEvent {
  constructor(
    public readonly subscriptionId: string,
    public readonly tenantId: string,
    public readonly plan: SubscriptionPlan,
    public readonly amount: number,
    public readonly failureReason: string,
    public readonly retryAttempt: number,
    public readonly maxRetries: number,
    public readonly failedAt: Date = new Date(),
  ) {}
}

export class UsageLimitWarningEvent {
  constructor(
    public readonly tenantId: string,
    public readonly plan: SubscriptionPlan,
    public readonly resourceType: 'invoices' | 'reminders' | 'clients',
    public readonly currentUsage: number,
    public readonly limit: number,
    public readonly percentageUsed: number,
    public readonly warnedAt: Date = new Date(),
  ) {}
}

export class UsageLimitExceededEvent {
  constructor(
    public readonly tenantId: string,
    public readonly plan: SubscriptionPlan,
    public readonly resourceType: 'invoices' | 'reminders' | 'clients',
    public readonly currentUsage: number,
    public readonly limit: number,
    public readonly exceededAt: Date = new Date(),
  ) {}
}

export class MemberInvitedEvent {
  constructor(
    public readonly tenantId: string,
    public readonly invitedById: string,
    public readonly invitedEmail: string,
    public readonly role: string,
    public readonly invitedAt: Date = new Date(),
  ) {}
}

export class MemberJoinedEvent {
  constructor(
    public readonly tenantId: string,
    public readonly userId: string,
    public readonly email: string,
    public readonly role: string,
    public readonly joinedAt: Date = new Date(),
  ) {}
}

export class MemberRemovedEvent {
  constructor(
    public readonly tenantId: string,
    public readonly userId: string,
    public readonly removedById: string,
    public readonly removedAt: Date = new Date(),
  ) {}
}

export class MemberRoleChangedEvent {
  constructor(
    public readonly tenantId: string,
    public readonly userId: string,
    public readonly previousRole: string,
    public readonly newRole: string,
    public readonly changedById: string,
    public readonly changedAt: Date = new Date(),
  ) {}
}
