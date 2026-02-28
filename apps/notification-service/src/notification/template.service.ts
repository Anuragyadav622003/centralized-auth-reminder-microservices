import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma.service';
import { NotificationChannel } from '../generated/prisma';

interface TemplateVariables {
  [key: string]: string;
}

export interface NotificationTemplate {
  id: string;
  name: string;
  type: string;
  channel: NotificationChannel;
  subject?: string;
  content: string;
  variables: string[];
  isDefault: boolean;
}

@Injectable()
export class TemplateService {
  private defaultTemplates: Map<string, NotificationTemplate> = new Map();

  constructor(
    private readonly prisma: PrismaService,
  ) {
    this.initializeDefaultTemplates();
  }

  private initializeDefaultTemplates() {
    // Pre-due reminder template (3 days before)
    this.defaultTemplates.set('PRE_DUE_EMAIL', {
      id: 'default_pre_due_email',
      name: 'Pre-Due Reminder (Email)',
      type: 'PRE_DUE',
      channel: NotificationChannel.EMAIL,
      subject: 'Payment Reminder: Invoice {{invoiceNumber}} due in 3 days',
      content: `Hi {{clientName}},

This is a friendly reminder that Invoice {{invoiceNumber}} for {{currency}} {{amount}} is due on {{dueDate}} (3 days from now).

{{#if paymentLink}}
You can pay instantly using this secure link: {{paymentLink}}
{{/if}}

If you have already made the payment, please disregard this message.

Best regards,
{{companyName}}`,
      variables: ['clientName', 'invoiceNumber', 'amount', 'currency', 'dueDate', 'paymentLink', 'companyName'],
      isDefault: true,
    });

    this.defaultTemplates.set('PRE_DUE_WHATSAPP', {
      id: 'default_pre_due_whatsapp',
      name: 'Pre-Due Reminder (WhatsApp)',
      type: 'PRE_DUE',
      channel: NotificationChannel.WHATSAPP,
      content: `Hi {{clientName}},

Friendly reminder: Invoice {{invoiceNumber}} for {{currency}} {{amount}} is due on {{dueDate}} (3 days).

{{#if paymentLink}}
Pay now: {{paymentLink}}
{{/if}}

Best regards,
{{companyName}}`,
      variables: ['clientName', 'invoiceNumber', 'amount', 'currency', 'dueDate', 'paymentLink', 'companyName'],
      isDefault: true,
    });

    // Due date reminder template
    this.defaultTemplates.set('DUE_DATE_EMAIL', {
      id: 'default_due_date_email',
      name: 'Due Date Reminder (Email)',
      type: 'DUE_DATE',
      channel: NotificationChannel.EMAIL,
      subject: 'Payment Due Today: Invoice {{invoiceNumber}}',
      content: `Hi {{clientName}},

This is a reminder that Invoice {{invoiceNumber}} for {{currency}} {{amount}} is due today.

{{#if paymentLink}}
Pay now to avoid late fees: {{paymentLink}}
{{/if}}

If you have already made the payment, please disregard this message.

Best regards,
{{companyName}}`,
      variables: ['clientName', 'invoiceNumber', 'amount', 'currency', 'dueDate', 'paymentLink', 'companyName'],
      isDefault: true,
    });

    this.defaultTemplates.set('DUE_DATE_WHATSAPP', {
      id: 'default_due_date_whatsapp',
      name: 'Due Date Reminder (WhatsApp)',
      type: 'DUE_DATE',
      channel: NotificationChannel.WHATSAPP,
      content: `Hi {{clientName}},

Reminder: Invoice {{invoiceNumber}} for {{currency}} {{amount}} is due TODAY.

{{#if paymentLink}}
Pay now: {{paymentLink}}
{{/if}}

Best regards,
{{companyName}}`,
      variables: ['clientName', 'invoiceNumber', 'amount', 'currency', 'dueDate', 'paymentLink', 'companyName'],
      isDefault: true,
    });

    // Overdue reminder template (3 days after)
    this.defaultTemplates.set('OVERDUE_3_EMAIL', {
      id: 'default_overdue_3_email',
      name: 'Overdue Reminder - 3 Days (Email)',
      type: 'OVERDUE_3',
      channel: NotificationChannel.EMAIL,
      subject: 'URGENT: Invoice {{invoiceNumber}} is 3 days overdue',
      content: `Hi {{clientName}},

Our records show that Invoice {{invoiceNumber}} for {{currency}} {{amount}} was due on {{dueDate}} and is now 3 days overdue.

{{#if paymentLink}}
Please make payment as soon as possible: {{paymentLink}}
{{/if}}

If you have any questions or concerns, please don't hesitate to contact us.

Best regards,
{{companyName}}`,
      variables: ['clientName', 'invoiceNumber', 'amount', 'currency', 'dueDate', 'paymentLink', 'companyName'],
      isDefault: true,
    });

    this.defaultTemplates.set('OVERDUE_3_WHATSAPP', {
      id: 'default_overdue_3_whatsapp',
      name: 'Overdue Reminder - 3 Days (WhatsApp)',
      type: 'OVERDUE_3',
      channel: NotificationChannel.WHATSAPP,
      content: `Hi {{clientName}},

Invoice {{invoiceNumber}} for {{currency}} {{amount}} is 3 days overdue (due {{dueDate}}).

{{#if paymentLink}}
Please pay now: {{paymentLink}}
{{/if}}

Contact us if you need assistance.

{{companyName}}`,
      variables: ['clientName', 'invoiceNumber', 'amount', 'currency', 'dueDate', 'paymentLink', 'companyName'],
      isDefault: true,
    });

    // Final notice template (7 days after)
    this.defaultTemplates.set('FINAL_EMAIL', {
      id: 'default_final_email',
      name: 'Final Notice (Email)',
      type: 'FINAL',
      channel: NotificationChannel.EMAIL,
      subject: 'FINAL NOTICE: Invoice {{invoiceNumber}} - Immediate Payment Required',
      content: `Hi {{clientName}},

This is a final notice regarding Invoice {{invoiceNumber}} for {{currency}} {{amount}} which was due on {{dueDate}} and is now significantly overdue.

{{#if paymentLink}}
Immediate payment is required. Pay now: {{paymentLink}}
{{/if}}

Please contact us immediately to discuss payment arrangements if you are unable to make payment at this time.

Best regards,
{{companyName}}`,
      variables: ['clientName', 'invoiceNumber', 'amount', 'currency', 'dueDate', 'paymentLink', 'companyName'],
      isDefault: true,
    });

    // Payment confirmation template
    this.defaultTemplates.set('PAYMENT_CONFIRMATION_EMAIL', {
      id: 'default_payment_confirmation_email',
      name: 'Payment Confirmation (Email)',
      type: 'PAYMENT_CONFIRMATION',
      channel: NotificationChannel.EMAIL,
      subject: 'Payment Received: Invoice {{invoiceNumber}}',
      content: `Hi {{clientName}},

Thank you for your payment of {{currency}} {{amount}} for Invoice {{invoiceNumber}}.

Payment received on: {{paidAt}}

We appreciate your business!

Best regards,
{{companyName}}`,
      variables: ['clientName', 'invoiceNumber', 'amount', 'currency', 'paidAt', 'companyName'],
      isDefault: true,
    });

    this.defaultTemplates.set('PAYMENT_CONFIRMATION_WHATSAPP', {
      id: 'default_payment_confirmation_whatsapp',
      name: 'Payment Confirmation (WhatsApp)',
      type: 'PAYMENT_CONFIRMATION',
      channel: NotificationChannel.WHATSAPP,
      content: `Hi {{clientName}},

Thank you for your payment of {{currency}} {{amount}} for Invoice {{invoiceNumber}}.

Payment received: {{paidAt}}

Best regards,
{{companyName}}`,
      variables: ['clientName', 'invoiceNumber', 'amount', 'currency', 'paidAt', 'companyName'],
      isDefault: true,
    });
  }

  async getTemplate(
    tenantId: string,
    type: string,
    channel: NotificationChannel,
  ): Promise<NotificationTemplate | null> {
    const key = `${type}_${channel}`;

    // Try to get custom template from database
    try {
      const customTemplate = await this.prisma.notificationTemplate?.findFirst({
        where: {
          tenantId,
          type,
          channel,
        },
      });

      if (customTemplate) {
        return {
          id: customTemplate.id,
          name: customTemplate.name,
          type: customTemplate.type,
          channel: customTemplate.channel as NotificationChannel,
          subject: customTemplate.subject || undefined,
          content: customTemplate.content,
          variables: customTemplate.variables,
          isDefault: false,
        };
      }
    } catch (error) {
      // Prisma model might not exist yet, use default templates
    }

    // Return default template
    return this.defaultTemplates.get(key) || null;
  }

  async getTemplatesByTenant(tenantId: string): Promise<NotificationTemplate[]> {
    const templates: NotificationTemplate[] = [];

    // Get custom templates from database
    try {
      const customTemplates = await this.prisma.notificationTemplate?.findMany({
        where: { tenantId },
      });

      if (customTemplates) {
        templates.push(...customTemplates.map((t: any) => ({
          id: t.id,
          name: t.name,
          type: t.type,
          channel: t.channel as NotificationChannel,
          subject: t.subject || undefined,
          content: t.content,
          variables: t.variables,
          isDefault: false,
        })));
      }
    } catch (error) {
      // Prisma model might not exist yet
    }

    // Add default templates that are not overridden
    for (const [, template] of this.defaultTemplates) {
      const exists = templates.find(
        (t) => t.type === template.type && t.channel === template.channel,
      );
      if (!exists) {
        templates.push(template);
      }
    }

    return templates;
  }

  renderTemplate(template: NotificationTemplate, variables: TemplateVariables): { subject?: string; content: string } {
    let content = template.content;
    let subject = template.subject;

    // Replace simple variables
    for (const [key, value] of Object.entries(variables)) {
      const regex = new RegExp(`{{${key}}}`, 'g');
      content = content.replace(regex, value);
      if (subject) {
        subject = subject.replace(regex, value);
      }
    }

    // Handle conditional blocks (simple implementation)
    content = this.processConditionals(content, variables);

    return { subject, content };
  }

  private processConditionals(content: string, variables: TemplateVariables): string {
    // Simple conditional processing for {{#if variable}}...{{/if}}
    const ifRegex = /{{#if (\w+)}}([\s\S]*?){{\/if}}/g;
    
    return content.replace(ifRegex, (match, variable, innerContent) => {
      return variables[variable] ? innerContent.trim() : '';
    });
  }

  getDefaultTemplates(): NotificationTemplate[] {
    return Array.from(this.defaultTemplates.values());
  }

  getTemplateVariables(type: string): string[] {
    const template = this.defaultTemplates.get(`${type}_EMAIL`) || this.defaultTemplates.get(`${type}_WHATSAPP`);
    return template?.variables || [];
  }
}
