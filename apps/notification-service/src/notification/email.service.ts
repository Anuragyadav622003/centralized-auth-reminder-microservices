import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

interface EmailOptions {
  to: string;
  subject: string;
  html?: string;
  text?: string;
  from?: string;
  fromName?: string;
  replyTo?: string;
  attachments?: Array<{
    filename: string;
    content: string;
    type: string;
  }>;
}

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private readonly apiKey: string;
  private readonly fromEmail: string;
  private readonly fromName: string;

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('SENDGRID_API_KEY') || '';
    this.fromEmail = this.configService.get<string>('SENDGRID_FROM_EMAIL') || 'noreply@paypulse.in';
    this.fromName = this.configService.get<string>('SENDGRID_FROM_NAME') || 'PayPulse';
  }

  async sendEmail(options: EmailOptions): Promise<{ success: boolean; messageId?: string; error?: string }> {
    if (!this.apiKey) {
      this.logger.warn('SendGrid not configured');
      return { success: false, error: 'SendGrid not configured' };
    }

    let payload: any = {};
    try {
      payload = {
        personalizations: [
          {
            to: [{ email: options.to }],
          },
        ],
        from: {
          email: options.from || this.fromEmail,
          name: options.fromName || this.fromName,
        },
        subject: options.subject,
      };

      if (options.replyTo) {
        payload.reply_to = { email: options.replyTo };
      }

      if (options.html) {
        payload.content = [
          { type: 'text/html', value: options.html },
        ];
      } else if (options.text) {
        payload.content = [
          { type: 'text/plain', value: options.text },
        ];
      }

      if (options.attachments && options.attachments.length > 0) {
        payload.attachments = options.attachments.map((att) => ({
          filename: att.filename,
          content: att.content,
          type: att.type,
          disposition: 'attachment',
        }));
      }

      const response = await axios.post(
        'https://api.sendgrid.com/v3/mail/send',
        payload,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        },
      );

      // SendGrid returns 202 Accepted with message ID in headers
      const messageId = response.headers['x-message-id'];
      this.logger.log(`Email sent: ${messageId}`);

      return { success: true, messageId };
    } catch (error: any) {
      this.logger.error('Failed to send email:', error.response?.data || error.message);
      return {
        success: false,
        error: error.response?.data?.errors?.[0]?.message || error.message,
      };
    }
  }

  async sendPaymentReminder(
    to: string,
    data: {
      clientName: string;
      invoiceNumber: string;
      amount: number;
      currency: string;
      dueDate: string;
      paymentLink?: string;
      companyName?: string;
    },
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    const subject = `Payment Reminder: Invoice ${data.invoiceNumber}`;
    const html = this.buildReminderHtml(data);
    const text = this.buildReminderText(data);

    return this.sendEmail({
      to,
      subject,
      html,
      text,
    });
  }

  async sendPaymentConfirmation(
    to: string,
    data: {
      clientName: string;
      invoiceNumber: string;
      amount: number;
      currency: string;
      paidAt: string;
      companyName?: string;
    },
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    const subject = `Payment Received: Invoice ${data.invoiceNumber}`;
    const html = this.buildConfirmationHtml(data);
    const text = this.buildConfirmationText(data);

    return this.sendEmail({
      to,
      subject,
      html,
      text,
    });
  }

  async sendInvoice(
    to: string,
    data: {
      clientName: string;
      invoiceNumber: string;
      amount: number;
      currency: string;
      dueDate: string;
      paymentLink?: string;
      pdfUrl?: string;
      companyName?: string;
    },
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    const subject = `Invoice ${data.invoiceNumber} from ${data.companyName || 'PayPulse'}`;
    const html = this.buildInvoiceHtml(data);
    const text = this.buildInvoiceText(data);

    return this.sendEmail({
      to,
      subject,
      html,
      text,
    });
  }

  async sendWelcomeEmail(
    to: string,
    data: {
      name: string;
      tenantName: string;
      loginUrl?: string;
    },
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    const subject = 'Welcome to PayPulse!';
    const html = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #4F46E5;">Welcome to PayPulse, ${data.name}!</h1>
            <p>Thank you for creating an account for <strong>${data.tenantName}</strong>.</p>
            <p>With PayPulse, you can:</p>
            <ul>
              <li>Create and send professional invoices</li>
              <li>Automate payment reminders</li>
              <li>Accept online payments via Razorpay</li>
              <li>Track payment status in real-time</li>
            </ul>
            ${data.loginUrl ? `<p><a href="${data.loginUrl}" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">Get Started</a></p>` : ''}
            <p>Need help? Reply to this email or contact our support team.</p>
            <p>Best regards,<br>The PayPulse Team</p>
          </div>
        </body>
      </html>
    `;

    return this.sendEmail({ to, subject, html });
  }

  isConfigured(): boolean {
    return !!this.apiKey;
  }

  private buildReminderHtml(data: {
    clientName: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    dueDate: string;
    paymentLink?: string;
    companyName?: string;
  }): string {
    return `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #4F46E5;">Payment Reminder</h2>
            <p>Hi ${data.clientName},</p>
            <p>This is a friendly reminder that payment for <strong>Invoice ${data.invoiceNumber}</strong> is due on <strong>${data.dueDate}</strong>.</p>
            <div style="background: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0;"><strong>Amount Due:</strong> ${data.currency} ${data.amount}</p>
              <p style="margin: 10px 0 0 0;"><strong>Due Date:</strong> ${data.dueDate}</p>
            </div>
            ${data.paymentLink ? `<p><a href="${data.paymentLink}" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">Pay Now</a></p>` : ''}
            <p>If you have already made the payment, please disregard this message.</p>
            <p>Best regards,<br>${data.companyName || 'PayPulse Team'}</p>
          </div>
        </body>
      </html>
    `;
  }

  private buildReminderText(data: {
    clientName: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    dueDate: string;
    paymentLink?: string;
    companyName?: string;
  }): string {
    let text = `Hi ${data.clientName},\n\n`;
    text += `This is a friendly reminder that payment for Invoice ${data.invoiceNumber} is due on ${data.dueDate}.\n\n`;
    text += `Amount Due: ${data.currency} ${data.amount}\n`;
    text += `Due Date: ${data.dueDate}\n\n`;
    if (data.paymentLink) {
      text += `Pay now: ${data.paymentLink}\n\n`;
    }
    text += `If you have already made the payment, please disregard this message.\n\n`;
    text += `Best regards,\n${data.companyName || 'PayPulse Team'}`;
    return text;
  }

  private buildConfirmationHtml(data: {
    clientName: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    paidAt: string;
    companyName?: string;
  }): string {
    return `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #10B981;">Payment Received</h2>
            <p>Hi ${data.clientName},</p>
            <p>Thank you for your payment. We have received your payment for <strong>Invoice ${data.invoiceNumber}</strong>.</p>
            <div style="background: #ECFDF5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0;"><strong>Amount Paid:</strong> ${data.currency} ${data.amount}</p>
              <p style="margin: 10px 0 0 0;"><strong>Payment Date:</strong> ${data.paidAt}</p>
            </div>
            <p>Thank you for your business!</p>
            <p>Best regards,<br>${data.companyName || 'PayPulse Team'}</p>
          </div>
        </body>
      </html>
    `;
  }

  private buildConfirmationText(data: {
    clientName: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    paidAt: string;
    companyName?: string;
  }): string {
    let text = `Hi ${data.clientName},\n\n`;
    text += `Thank you for your payment. We have received your payment for Invoice ${data.invoiceNumber}.\n\n`;
    text += `Amount Paid: ${data.currency} ${data.amount}\n`;
    text += `Payment Date: ${data.paidAt}\n\n`;
    text += `Thank you for your business!\n\n`;
    text += `Best regards,\n${data.companyName || 'PayPulse Team'}`;
    return text;
  }

  private buildInvoiceHtml(data: {
    clientName: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    dueDate: string;
    paymentLink?: string;
    pdfUrl?: string;
    companyName?: string;
  }): string {
    return `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #4F46E5;">New Invoice</h2>
            <p>Hi ${data.clientName},</p>
            <p>You have a new invoice from <strong>${data.companyName || 'PayPulse'}</strong>.</p>
            <div style="background: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0;"><strong>Invoice Number:</strong> ${data.invoiceNumber}</p>
              <p style="margin: 10px 0 0 0;"><strong>Amount:</strong> ${data.currency} ${data.amount}</p>
              <p style="margin: 10px 0 0 0;"><strong>Due Date:</strong> ${data.dueDate}</p>
            </div>
            ${data.paymentLink ? `<p><a href="${data.paymentLink}" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">Pay Now</a></p>` : ''}
            ${data.pdfUrl ? `<p><a href="${data.pdfUrl}" style="color: #4F46E5;">Download Invoice PDF</a></p>` : ''}
            <p>Best regards,<br>${data.companyName || 'PayPulse Team'}</p>
          </div>
        </body>
      </html>
    `;
  }

  private buildInvoiceText(data: {
    clientName: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    dueDate: string;
    paymentLink?: string;
    pdfUrl?: string;
    companyName?: string;
  }): string {
    let text = `Hi ${data.clientName},\n\n`;
    text += `You have a new invoice from ${data.companyName || 'PayPulse'}.\n\n`;
    text += `Invoice Number: ${data.invoiceNumber}\n`;
    text += `Amount: ${data.currency} ${data.amount}\n`;
    text += `Due Date: ${data.dueDate}\n\n`;
    if (data.paymentLink) {
      text += `Pay now: ${data.paymentLink}\n\n`;
    }
    if (data.pdfUrl) {
      text += `Download PDF: ${data.pdfUrl}\n\n`;
    }
    text += `Best regards,\n${data.companyName || 'PayPulse Team'}`;
    return text;
  }
}
