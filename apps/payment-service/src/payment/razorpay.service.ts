import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Razorpay from 'razorpay';

@Injectable()
export class RazorpayService {
  private readonly logger = new Logger(RazorpayService.name);
  private razorpay!: Razorpay;

  constructor(private readonly configService: ConfigService) {
    const keyId = this.configService.get<string>('RAZORPAY_KEY_ID');
    const keySecret = this.configService.get<string>('RAZORPAY_KEY_SECRET');

    if (!keyId || !keySecret) {
      this.logger.warn('Razorpay credentials not configured');
      return;
    }

    this.razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });
  }

  async createOrder(
    amount: number,
    currency: string,
    receipt: string,
    notes?: Record<string, string>,
  ): Promise<any> {
    if (!this.razorpay) {
      throw new BadRequestException('Razorpay not configured');
    }

    try {
      // Amount should be in paise (multiply by 100)
      const amountInPaise = Math.round(amount * 100);

      const order = await this.razorpay.orders.create({
        amount: amountInPaise,
        currency: currency || 'INR',
        receipt,
        notes,
        payment_capture: true,
      });

      this.logger.log(`Created Razorpay order: ${order.id}`);
      return order;
    } catch (error) {
      this.logger.error('Failed to create Razorpay order:', error);
      throw new BadRequestException('Failed to create payment order');
    }
  }

  async fetchOrder(orderId: string): Promise<any> {
    if (!this.razorpay) {
      throw new BadRequestException('Razorpay not configured');
    }

    try {
      const order = await this.razorpay.orders.fetch(orderId);
      return order;
    } catch (error) {
      this.logger.error(`Failed to fetch order ${orderId}:`, error);
      throw new BadRequestException('Failed to fetch order');
    }
  }

  async fetchPayment(paymentId: string): Promise<any> {
    if (!this.razorpay) {
      throw new BadRequestException('Razorpay not configured');
    }

    try {
      const payment = await this.razorpay.payments.fetch(paymentId);
      return payment;
    } catch (error) {
      this.logger.error(`Failed to fetch payment ${paymentId}:`, error);
      throw new BadRequestException('Failed to fetch payment');
    }
  }

  async capturePayment(paymentId: string, amount: number, currency: string): Promise<any> {
    if (!this.razorpay) {
      throw new BadRequestException('Razorpay not configured');
    }

    try {
      const amountInPaise = Math.round(amount * 100);
      const payment = await this.razorpay.payments.capture(
        paymentId,
        amountInPaise,
        currency || 'INR',
      );
      return payment;
    } catch (error) {
      this.logger.error(`Failed to capture payment ${paymentId}:`, error);
      throw new BadRequestException('Failed to capture payment');
    }
  }

  async createRefund(
    paymentId: string,
    amount?: number,
    notes?: Record<string, string>,
  ): Promise<any> {
    if (!this.razorpay) {
      throw new BadRequestException('Razorpay not configured');
    }

    try {
      const refundData: any = { payment_id: paymentId };
      if (amount) {
        refundData.amount = Math.round(amount * 100);
      }
      if (notes) {
        refundData.notes = notes;
      }

      const refund = await this.razorpay.payments.refund(paymentId, refundData);
      this.logger.log(`Created refund for payment ${paymentId}: ${refund.id}`);
      return refund;
    } catch (error) {
      this.logger.error(`Failed to create refund for payment ${paymentId}:`, error);
      throw new BadRequestException('Failed to create refund');
    }
  }

  async createPaymentLink(data: {
    amount: number;
    currency: string;
    description: string;
    customer?: {
      name: string;
      email?: string;
      contact?: string;
    };
    callback_url?: string;
    callback_method?: string;
  }): Promise<any> {
    if (!this.razorpay) {
      throw new BadRequestException('Razorpay not configured');
    }

    try {
      const paymentLinkData: any = {
        amount: Math.round(data.amount * 100),
        currency: data.currency || 'INR',
        description: data.description,
        callback_url: data.callback_url,
        callback_method: data.callback_method || 'get',
      };
      
      if (data.customer) {
        paymentLinkData.customer = data.customer;
      }
      
      const paymentLink = await this.razorpay.paymentLink.create(paymentLinkData);

      this.logger.log(`Created payment link: ${paymentLink.id}`);
      return paymentLink;
    } catch (error) {
      this.logger.error('Failed to create payment link:', error);
      throw new BadRequestException('Failed to create payment link');
    }
  }

  verifyWebhookSignature(
    body: string | Buffer,
    signature: string,
    secret: string,
  ): boolean {
    const crypto = require('crypto');
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(body)
      .digest('hex');

    return expectedSignature === signature;
  }

  getKeyId(): string | undefined {
    return this.configService.get<string>('RAZORPAY_KEY_ID');
  }
}
