/**
 * PayPulse Shared Interfaces
 * Core data structures used across microservices
 */

import {
  InvoiceStatus,
  PaymentStatus,
  ReminderStatus,
  ReminderMethod,
  ReminderType,
  SubscriptionPlan,
  SubscriptionStatus,
  UserRole,
  TenantRole,
  PaymentProvider,
  Currency,
  NotificationChannel,
} from './enums.js';

// ==================== USER & AUTH ====================

export interface IUser {
  id: string;
  email: string;
  password?: string; // Optional when returning user data
  globalRole: string;
  isEmailVerified: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserProfile {
  id: string;
  userId: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  avatarUrl?: string;
  businessName?: string;
  gstin?: string;
  pan?: string;
  address?: IAddress;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserSettings {
  id: string;
  userId: string;
  notificationPreferences: INotificationPreferences;
  timezone: string;
  language: string;
  dateFormat: string;
  currency: Currency;
  createdAt: Date;
  updatedAt: Date;
}

export interface INotificationPreferences {
  email: boolean;
  whatsapp: boolean;
  sms: boolean;
  push: boolean;
  marketingEmails: boolean;
}

export interface IAddress {
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
}

// ==================== TENANT ====================

export interface ITenant {
  id: string;
  name: string;
  slug: string;
  plan: SubscriptionPlan;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IMembership {
  id: string;
  userId: string;
  tenantId: string;
  role: TenantRole;
  createdAt: Date;
}

export interface ITenantSettings {
  id: string;
  tenantId: string;
  reminderIntervals: number[]; // Days relative to due date: [-3, 0, 3, 7]
  defaultReminderMethod: ReminderMethod;
  whatsappTemplate?: string;
  emailTemplate?: string;
  smsTemplate?: string;
  businessHoursOnly: boolean;
  skipWeekends: boolean;
  branding?: ITenantBranding;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITenantBranding {
  logoUrl?: string;
  primaryColor?: string;
  accentColor?: string;
  customDomain?: string;
}

export interface ISubscription {
  id: string;
  tenantId: string;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  razorpaySubscriptionId?: string;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUsageMetrics {
  id: string;
  tenantId: string;
  invoicesCreated: number;
  remindersSent: number;
  clientsAdded: number;
  paymentsReceived: number;
  month: number;
  year: number;
  createdAt: Date;
  updatedAt: Date;
}

// ==================== CLIENT ====================

export interface IClient {
  id: string;
  tenantId: string;
  name: string;
  email?: string;
  phone?: string;
  gstin?: string;
  pan?: string;
  billingAddress?: IAddress;
  shippingAddress?: IAddress;
  notes?: string;
  tags?: string[];
  paymentTerms?: number; // Days
  createdAt: Date;
  updatedAt: Date;
}

// ==================== INVOICE ====================

export interface IInvoice {
  id: string;
  tenantId: string;
  clientId: string;
  createdById: string;
  invoiceNumber: string;
  amount: number;
  currency: Currency;
  dueDate: Date;
  issuedDate: Date;
  status: InvoiceStatus;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  paymentLink?: string;
  pdfUrl?: string;
  notes?: string;
  lineItems?: IInvoiceLineItem[];
  subtotal?: number;
  taxAmount?: number;
  discountAmount?: number;
  termsAndConditions?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IInvoiceLineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
  taxRate?: number;
}

// ==================== PAYMENT ====================

export interface IPayment {
  id: string;
  invoiceId: string;
  tenantId: string;
  amount: number;
  currency: Currency;
  provider: PaymentProvider;
  providerPaymentId?: string;
  providerOrderId?: string;
  status: PaymentStatus;
  paidAt?: Date;
  metadata?: Record<string, any>;
  failureReason?: string;
  refundAmount?: number;
  refundedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPaymentLink {
  id: string;
  invoiceId: string;
  tenantId: string;
  url: string;
  shortUrl?: string;
  expiresAt?: Date;
  isActive: boolean;
  accessCount: number;
  createdAt: Date;
}

// ==================== REMINDER ====================

export interface IReminder {
  id: string;
  invoiceId: string;
  tenantId: string;
  clientId: string;
  type: ReminderType;
  method: ReminderMethod;
  scheduledAt: Date;
  sentAt?: Date;
  status: ReminderStatus;
  attempt: number;
  maxAttempts: number;
  errorMessage?: string;
  metadata: IReminderMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface IReminderMetadata {
  invoiceNumber: string;
  amount: number;
  currency: Currency;
  clientName: string;
  clientEmail?: string;
  clientPhone?: string;
  paymentLink?: string;
  dueDate: Date;
}

export interface IReminderLog {
  id: string;
  reminderId: string;
  invoiceId: string;
  tenantId: string;
  method: ReminderMethod;
  scheduledAt: Date;
  sentAt?: Date;
  status: ReminderStatus;
  errorMessage?: string;
  providerResponse?: string;
  createdAt: Date;
}

// ==================== NOTIFICATION ====================

export interface INotification {
  id: string;
  tenantId: string;
  userId?: string;
  type: string;
  channel: NotificationChannel;
  recipient: string;
  subject?: string;
  content: string;
  templateId?: string;
  templateData?: Record<string, any>;
  status: string;
  sentAt?: Date;
  deliveredAt?: Date;
  openedAt?: Date;
  errorMessage?: string;
  metadata?: Record<string, any>;
  createdAt: Date;
}

export interface INotificationTemplate {
  id: string;
  tenantId: string;
  name: string;
  type: string;
  channel: NotificationChannel;
  subject?: string;
  content: string;
  variables: string[];
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// ==================== API RESPONSES ====================

export interface IApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: IApiError;
  meta?: IApiMeta;
}

export interface IApiError {
  code: string;
  message: string;
  details?: Record<string, string[]>;
}

export interface IApiMeta {
  page?: number;
  limit?: number;
  total?: number;
  totalPages?: number;
}

// ==================== JWT PAYLOAD ====================

export interface IJwtPayload {
  sub: string; // userId
  email: string;
  tenantId: string;
  role: UserRole;
  iat?: number;
  exp?: number;
}

// ==================== JOB QUEUE ====================

export interface IJobData {
  jobId: string;
  type: string;
  payload: any;
  attempts: number;
  maxAttempts: number;
}

export interface IReminderJobData extends IJobData {
  type: 'SEND_REMINDER';
  payload: {
    reminderId: string;
    invoiceId: string;
    tenantId: string;
  };
}

export interface IWebhookJobData extends IJobData {
  type: 'PROCESS_WEBHOOK';
  payload: {
    event: string;
    payload: any;
    signature: string;
  };
}

// ==================== RAZORPAY ====================

export interface IRazorpayOrder {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
  status: string;
  attempts: number;
  notes?: Record<string, string>;
  created_at: number;
}

export interface IRazorpayPayment {
  id: string;
  order_id: string;
  amount: number;
  currency: string;
  status: string;
  method: string;
  captured: boolean;
  description?: string;
  email?: string;
  contact?: string;
  created_at: number;
}

// ==================== WEBHOOK ====================

export interface IWebhookPayload {
  event: string;
  payload: {
    payment?: {
      entity: IRazorpayPayment;
    };
    order?: {
      entity: IRazorpayOrder;
    };
  };
  created_at: number;
}
