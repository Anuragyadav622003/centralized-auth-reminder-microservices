/**
 * PayPulse Shared DTOs (Data Transfer Objects)
 * Used for API requests and responses
 */

import {
  InvoiceStatus,
  PaymentStatus,
  ReminderMethod,
  SubscriptionPlan,
  Currency,
  NotificationChannel,
} from './enums.js';

// ==================== AUTH DTOs ====================

export interface RegisterDto {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  businessName?: string;
  phone?: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RefreshTokenDto {
  refreshToken: string;
}

export interface AuthResponseDto {
  accessToken: string;
  refreshToken: string;
  user: UserDto;
}

export interface UserDto {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  businessName?: string;
  role: string;
  isEmailVerified: boolean;
  createdAt: Date;
}

export interface UpdateProfileDto {
  firstName?: string;
  lastName?: string;
  phone?: string;
  businessName?: string;
  gstin?: string;
  pan?: string;
  address?: AddressDto;
}

export interface UpdateUserSettingsDto {
  notificationPreferences?: NotificationPreferencesDto;
  timezone?: string;
  language?: string;
  dateFormat?: string;
  currency?: Currency;
}

export interface NotificationPreferencesDto {
  email: boolean;
  whatsapp: boolean;
  sms: boolean;
  push: boolean;
  marketingEmails: boolean;
}

export interface AddressDto {
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
}

// ==================== TENANT DTOs ====================

export interface CreateTenantDto {
  name: string;
  slug: string;
}

export interface UpdateTenantDto {
  name?: string;
  branding?: TenantBrandingDto;
}

export interface TenantBrandingDto {
  logoUrl?: string;
  primaryColor?: string;
  accentColor?: string;
  customDomain?: string;
}

export interface TenantResponseDto {
  id: string;
  name: string;
  slug: string;
  plan: SubscriptionPlan;
  isActive: boolean;
  settings?: TenantSettingsDto;
  subscription?: SubscriptionDto;
  usage?: UsageMetricsDto;
  createdAt: Date;
}

export interface TenantSettingsDto {
  reminderIntervals: number[];
  defaultReminderMethod: ReminderMethod;
  whatsappTemplate?: string;
  emailTemplate?: string;
  smsTemplate?: string;
  businessHoursOnly: boolean;
  skipWeekends: boolean;
}

export interface UpdateTenantSettingsDto {
  reminderIntervals?: number[];
  defaultReminderMethod?: ReminderMethod;
  whatsappTemplate?: string;
  emailTemplate?: string;
  smsTemplate?: string;
  businessHoursOnly?: boolean;
  skipWeekends?: boolean;
}

export interface SubscriptionDto {
  id: string;
  plan: SubscriptionPlan;
  status: string;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
}

export interface UsageMetricsDto {
  invoicesCreated: number;
  invoicesLimit: number;
  remindersSent: number;
  remindersLimit: number;
  clientsAdded: number;
  clientsLimit: number;
  month: number;
  year: number;
}

export interface SubscribePlanDto {
  plan: SubscriptionPlan;
  billingCycle: 'monthly' | 'yearly';
}

// ==================== CLIENT DTOs ====================

export interface CreateClientDto {
  name: string;
  email?: string;
  phone?: string;
  gstin?: string;
  pan?: string;
  billingAddress?: AddressDto;
  shippingAddress?: AddressDto;
  notes?: string;
  tags?: string[];
  paymentTerms?: number;
}

export interface UpdateClientDto {
  name?: string;
  email?: string;
  phone?: string;
  gstin?: string;
  pan?: string;
  billingAddress?: AddressDto;
  shippingAddress?: AddressDto;
  notes?: string;
  tags?: string[];
  paymentTerms?: number;
}

export interface ClientResponseDto {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  gstin?: string;
  billingAddress?: AddressDto;
  totalInvoices: number;
  totalPaid: number;
  totalOutstanding: number;
  createdAt: Date;
}

export interface ClientListQueryDto {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// ==================== INVOICE DTOs ====================

export interface CreateInvoiceDto {
  clientId: string;
  invoiceNumber: string;
  amount: number;
  currency?: Currency;
  dueDate: Date;
  issuedDate?: Date;
  lineItems?: InvoiceLineItemDto[];
  notes?: string;
  termsAndConditions?: string;
  pdfUrl?: string;
}

export interface UpdateInvoiceDto {
  clientId?: string;
  invoiceNumber?: string;
  amount?: number;
  dueDate?: Date;
  notes?: string;
  termsAndConditions?: string;
}

export interface InvoiceLineItemDto {
  description: string;
  quantity: number;
  unitPrice: number;
  taxRate?: number;
}

export interface InvoiceResponseDto {
  id: string;
  invoiceNumber: string;
  client: ClientResponseDto;
  amount: number;
  currency: Currency;
  dueDate: Date;
  issuedDate: Date;
  status: InvoiceStatus;
  paymentLink?: string;
  pdfUrl?: string;
  notes?: string;
  remindersSent: number;
  createdAt: Date;
}

export interface InvoiceDetailDto extends InvoiceResponseDto {
  lineItems: InvoiceLineItemDto[];
  payments: PaymentResponseDto[];
  reminders: ReminderResponseDto[];
}

export interface InvoiceListQueryDto {
  page?: number;
  limit?: number;
  status?: InvoiceStatus;
  clientId?: string;
  startDate?: Date;
  endDate?: Date;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface SendReminderDto {
  method?: ReminderMethod;
  customMessage?: string;
}

// ==================== PAYMENT DTOs ====================

export interface CreatePaymentOrderDto {
  invoiceId: string;
}

export interface PaymentOrderResponseDto {
  orderId: string;
  amount: number;
  currency: Currency;
  receipt: string;
  keyId: string;
}

export interface PaymentResponseDto {
  id: string;
  amount: number;
  currency: Currency;
  status: PaymentStatus;
  provider: string;
  paidAt?: Date;
  createdAt: Date;
}

export interface RazorpayWebhookDto {
  event: string;
  payload: any;
  created_at: number;
}

export interface VerifyPaymentDto {
  razorpayPaymentId: string;
  razorpayOrderId: string;
  razorpaySignature: string;
}

// ==================== REMINDER DTOs ====================

export interface CreateReminderDto {
  invoiceId: string;
  type: string;
  method: ReminderMethod;
  scheduledAt: Date;
}

export interface ReminderResponseDto {
  id: string;
  invoiceId: string;
  type: string;
  method: ReminderMethod;
  scheduledAt: Date;
  sentAt?: Date;
  status: string;
  attempt: number;
}

export interface ReminderListQueryDto {
  page?: number;
  limit?: number;
  invoiceId?: string;
  status?: string;
  startDate?: Date;
  endDate?: Date;
}

// ==================== NOTIFICATION DTOs ====================

export interface SendNotificationDto {
  channel: NotificationChannel;
  recipient: string;
  subject?: string;
  content: string;
  templateId?: string;
  templateData?: Record<string, any>;
}

export interface NotificationTemplateDto {
  id: string;
  name: string;
  type: string;
  channel: NotificationChannel;
  subject?: string;
  content: string;
  variables: string[];
}

export interface UpdateTemplateDto {
  subject?: string;
  content: string;
}

export interface NotificationHistoryQueryDto {
  page?: number;
  limit?: number;
  channel?: NotificationChannel;
  startDate?: Date;
  endDate?: Date;
}

// ==================== BILLING DTOs ====================

export interface PlanDto {
  id: SubscriptionPlan;
  name: string;
  description: string;
  price: number;
  currency: Currency;
  billingCycle: 'monthly' | 'yearly';
  features: string[];
  limits: PlanLimitsDto;
}

export interface PlanLimitsDto {
  invoicesPerMonth: number;
  clients: number;
  remindersPerMonth: number;
  teamMembers: number;
  customBranding: boolean;
  apiAccess: boolean;
}

export interface UpgradePlanDto {
  plan: SubscriptionPlan;
  billingCycle: 'monthly' | 'yearly';
}

// ==================== DASHBOARD DTOs ====================

export interface DashboardStatsDto {
  totalInvoices: number;
  totalPaid: number;
  totalOutstanding: number;
  totalOverdue: number;
  recentInvoices: InvoiceResponseDto[];
  upcomingReminders: ReminderResponseDto[];
}

export interface FinancialSummaryDto {
  period: string;
  totalRevenue: number;
  totalCollected: number;
  totalPending: number;
  collectionRate: number;
  averagePaymentTime: number;
}
