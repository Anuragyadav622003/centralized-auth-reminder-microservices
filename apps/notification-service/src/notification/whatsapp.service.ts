import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class WhatsAppService {
  private readonly logger = new Logger(WhatsAppService.name);
  private readonly apiVersion: string;
  private readonly phoneNumberId: string;
  private readonly accessToken: string;
  private readonly baseUrl: string;

  constructor(private readonly configService: ConfigService) {
    this.apiVersion = this.configService.get<string>('WHATSAPP_API_VERSION') || 'v17.0';
    this.phoneNumberId = this.configService.get<string>('WHATSAPP_PHONE_NUMBER_ID') || '';
    this.accessToken = this.configService.get<string>('WHATSAPP_ACCESS_TOKEN') || '';
    this.baseUrl = `https://graph.facebook.com/${this.apiVersion}`;
  }

  async sendMessage(
    to: string,
    message: string,
    templateName?: string,
    templateData?: Record<string, string>,
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    if (!this.phoneNumberId || !this.accessToken) {
      this.logger.warn('WhatsApp not configured');
      return { success: false, error: 'WhatsApp not configured' };
    }

    try {
      // Format phone number (remove + and spaces)
      const formattedPhone = to.replace(/[+\s]/g, '');

      let payload: any;

      if (templateName) {
        // Send template message
        payload = {
          messaging_product: 'whatsapp',
          recipient_type: 'individual',
          to: formattedPhone,
          type: 'template',
          template: {
            name: templateName,
            language: { code: 'en' },
            components: templateData ? this.buildTemplateComponents(templateData) : undefined,
          },
        };
      } else {
        // Send text message
        payload = {
          messaging_product: 'whatsapp',
          recipient_type: 'individual',
          to: formattedPhone,
          type: 'text',
          text: {
            body: message,
            preview_url: true,
          },
        };
      }

      const response = await axios.post(
        `${this.baseUrl}/${this.phoneNumberId}/messages`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
          },
        },
      );

      const messageId = response.data?.messages?.[0]?.id;
      this.logger.log(`WhatsApp message sent: ${messageId}`);

      return { success: true, messageId };
    } catch (error: any) {
      this.logger.error('Failed to send WhatsApp message:', error.response?.data || error.message);
      return {
        success: false,
        error: error.response?.data?.error?.message || error.message,
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
    },
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    const message = this.buildReminderMessage(data);
    return this.sendMessage(to, message);
  }

  async sendPaymentConfirmation(
    to: string,
    data: {
      clientName: string;
      invoiceNumber: string;
      amount: number;
      currency: string;
      paidAt: string;
    },
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    const message = `Hi ${data.clientName},

Thank you for your payment of ${data.currency} ${data.amount} for Invoice ${data.invoiceNumber}.

Payment received on: ${data.paidAt}

Best regards,
PayPulse Team`;

    return this.sendMessage(to, message);
  }

  async getMessageStatus(messageId: string): Promise<any> {
    if (!this.accessToken) {
      return null;
    }

    try {
      const response = await axios.get(
        `${this.baseUrl}/${messageId}`,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        },
      );
      return response.data;
    } catch (error: any) {
      this.logger.error('Failed to get message status:', error.message);
      return null;
    }
  }

  private buildReminderMessage(data: {
    clientName: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    dueDate: string;
    paymentLink?: string;
  }): string {
    let message = `Hi ${data.clientName},

This is a friendly reminder that Invoice ${data.invoiceNumber} for ${data.currency} ${data.amount} is due on ${data.dueDate}.`;

    if (data.paymentLink) {
      message += `\n\nYou can pay instantly using this secure link: ${data.paymentLink}`;
    }

    message += `\n\nIf you have already made the payment, please disregard this message.

Best regards,
PayPulse Team`;

    return message;
  }

  private buildTemplateComponents(templateData: Record<string, string>): any[] {
    const parameters = Object.entries(templateData).map(([_, value]) => ({
      type: 'text',
      text: value,
    }));

    return [
      {
        type: 'body',
        parameters,
      },
    ];
  }

  isConfigured(): boolean {
    return !!(this.phoneNumberId && this.accessToken);
  }
}
