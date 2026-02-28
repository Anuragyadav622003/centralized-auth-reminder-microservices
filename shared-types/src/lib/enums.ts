/**
 * PayPulse Shared Enums
 * All enums used across microservices
 */

// Invoice Status
export enum InvoiceStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  OVERDUE = 'OVERDUE',
  CANCELLED = 'CANCELLED',
  PARTIAL = 'PARTIAL',
}

// Payment Status
export enum PaymentStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
  PARTIAL = 'PARTIAL',
}

// Reminder Status
export enum ReminderStatus {
  PENDING = 'PENDING',
  SENT = 'SENT',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
  RETRYING = 'RETRYING',
}

// Reminder Method
export enum ReminderMethod {
  WHATSAPP = 'WHATSAPP',
  EMAIL = 'EMAIL',
  SMS = 'SMS',
}

// Reminder Type
export enum ReminderType {
  PRE_DUE = 'PRE_DUE',       // 3 days before due date
  DUE_DATE = 'DUE_DATE',     // On due date
  OVERDUE_3 = 'OVERDUE_3',   // 3 days after due date
  OVERDUE_7 = 'OVERDUE_7',   // 7 days after due date
  FINAL = 'FINAL',           // Final notice (14 days after)
}

// Subscription Plan
export enum SubscriptionPlan {
  FREE = 'FREE',
  STARTER = 'STARTER',
  PRO = 'PRO',
  ENTERPRISE = 'ENTERPRISE',
}

// Subscription Status
export enum SubscriptionStatus {
  ACTIVE = 'ACTIVE',
  PAST_DUE = 'PAST_DUE',
  CANCELLED = 'CANCELLED',
  TRIAL = 'TRIAL',
  EXPIRED = 'EXPIRED',
}

// User Roles
export enum UserRole {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
  VIEWER = 'VIEWER',
}

// Global Roles (for auth service)
export enum GlobalRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  USER = 'USER',
}

// Tenant Roles
export enum TenantRole {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
}

// Notification Channel
export enum NotificationChannel {
  WHATSAPP = 'WHATSAPP',
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  PUSH = 'PUSH',
}

// Payment Provider
export enum PaymentProvider {
  RAZORPAY = 'RAZORPAY',
  STRIPE = 'STRIPE',
  CASH = 'CASH',
  BANK_TRANSFER = 'BANK_TRANSFER',
}

// Webhook Event Type
export enum WebhookEventType {
  PAYMENT_CAPTURED = 'payment.captured',
  PAYMENT_FAILED = 'payment.failed',
  PAYMENT_REFUNDED = 'refund.processed',
  SUBSCRIPTION_CHARGED = 'subscription.charged',
  SUBSCRIPTION_CANCELLED = 'subscription.cancelled',
}

// Job Status
export enum JobStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  RETRYING = 'RETRYING',
}

// Currency
export enum Currency {
  INR = 'INR',
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
}

// Invoice Template
export enum InvoiceTemplate {
  DEFAULT = 'DEFAULT',
  PROFESSIONAL = 'PROFESSIONAL',
  MINIMAL = 'MINIMAL',
  CREATIVE = 'CREATIVE',
}
