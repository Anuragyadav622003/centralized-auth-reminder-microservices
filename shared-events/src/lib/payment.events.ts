/**
 * Payment Events
 * Events related to payment processing
 */

export class PaymentInitiatedEvent {
  constructor(
    public readonly paymentId: string,
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly orderId: string,
    public readonly amount: number,
    public readonly currency: string,
    public readonly provider: string,
    public readonly initiatedAt: Date = new Date(),
  ) {}
}

export class PaymentCompletedEvent {
  constructor(
    public readonly paymentId: string,
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly providerPaymentId: string,
    public readonly orderId: string,
    public readonly amount: number,
    public readonly currency: string,
    public readonly provider: string,
    public readonly paidAt: Date,
    public readonly metadata?: Record<string, any>,
  ) {}
}

export class PaymentFailedEvent {
  constructor(
    public readonly paymentId: string,
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly orderId: string,
    public readonly amount: number,
    public readonly currency: string,
    public readonly provider: string,
    public readonly failureReason: string,
    public readonly failedAt: Date = new Date(),
    public readonly retryable: boolean = true,
  ) {}
}

export class PaymentRefundedEvent {
  constructor(
    public readonly paymentId: string,
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly refundId: string,
    public readonly amount: number,
    public readonly currency: string,
    public readonly reason?: string,
    public readonly refundedAt: Date = new Date(),
  ) {}
}

export class PaymentLinkCreatedEvent {
  constructor(
    public readonly linkId: string,
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly url: string,
    public readonly shortUrl?: string,
    public readonly expiresAt?: Date,
    public readonly createdAt: Date = new Date(),
  ) {}
}

export class PaymentLinkExpiredEvent {
  constructor(
    public readonly linkId: string,
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly expiredAt: Date = new Date(),
  ) {}
}

export class WebhookReceivedEvent {
  constructor(
    public readonly eventId: string,
    public readonly provider: string,
    public readonly eventType: string,
    public readonly payload: any,
    public readonly signature: string,
    public readonly receivedAt: Date = new Date(),
  ) {}
}

export class WebhookProcessedEvent {
  constructor(
    public readonly eventId: string,
    public readonly provider: string,
    public readonly eventType: string,
    public readonly success: boolean,
    public readonly errorMessage?: string,
    public readonly processedAt: Date = new Date(),
  ) {}
}
