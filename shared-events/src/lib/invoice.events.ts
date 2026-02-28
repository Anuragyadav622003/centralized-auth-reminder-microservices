/**
 * Invoice Events
 * Events related to invoice lifecycle
 */

export class InvoiceCreatedEvent {
  constructor(
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly clientId: string,
    public readonly createdById: string,
    public readonly invoiceNumber: string,
    public readonly amount: number,
    public readonly currency: string,
    public readonly dueDate: Date,
    public readonly clientEmail?: string,
    public readonly clientPhone?: string,
    public readonly clientName?: string,
  ) {}
}

export class InvoiceUpdatedEvent {
  constructor(
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly updatedFields: string[],
    public readonly previousValues?: Record<string, any>,
  ) {}
}

export class InvoiceDeletedEvent {
  constructor(
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly deletedAt: Date = new Date(),
  ) {}
}

export class InvoiceStatusChangedEvent {
  constructor(
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly previousStatus: string,
    public readonly newStatus: string,
    public readonly changedAt: Date = new Date(),
  ) {}
}

export class InvoiceOverdueEvent {
  constructor(
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly clientId: string,
    public readonly amount: number,
    public readonly currency: string,
    public readonly dueDate: Date,
    public readonly daysOverdue: number,
  ) {}
}

export class InvoicePaidEvent {
  constructor(
    public readonly invoiceId: string,
    public readonly tenantId: string,
    public readonly clientId: string,
    public readonly amount: number,
    public readonly currency: string,
    public readonly paidAt: Date,
    public readonly paymentId: string,
  ) {}
}
