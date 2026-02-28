import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PaymentService } from './payment.service';
import { RazorpayService } from './razorpay.service';
import { WebhookEventType } from '@org/shared-types';

@Injectable()
export class WebhookService {
  private readonly logger = new Logger(WebhookService.name);

  constructor(
    private readonly paymentService: PaymentService,
    private readonly razorpayService: RazorpayService,
    private readonly configService: ConfigService,
  ) {}

  async processRazorpayWebhook(payload: any, signature: string): Promise<void> {
    // Verify webhook signature
    const secret = this.configService.get<string>('RAZORPAY_WEBHOOK_SECRET');
    if (!secret) {
      this.logger.warn('Razorpay webhook secret not configured, skipping verification');
    } else {
      const isValid = this.razorpayService.verifyWebhookSignature(
        JSON.stringify(payload),
        signature,
        secret,
      );

      if (!isValid) {
        throw new BadRequestException('Invalid webhook signature');
      }
    }

    const event = payload.event;
    const eventId = payload.id || `evt_${Date.now()}`;

    this.logger.log(`Processing webhook event: ${event}`);

    try {
      switch (event) {
        case WebhookEventType.PAYMENT_CAPTURED:
          await this.handlePaymentCaptured(payload.payload.payment.entity);
          break;

        case WebhookEventType.PAYMENT_FAILED:
          await this.handlePaymentFailed(payload.payload.payment.entity);
          break;

        case WebhookEventType.PAYMENT_REFUNDED:
          await this.handlePaymentRefunded(payload.payload.refund.entity);
          break;

        default:
          this.logger.log(`Unhandled webhook event: ${event}`);
      }

      this.logger.log(`Successfully processed webhook: ${eventId}`);
    } catch (error) {
      this.logger.error(`Failed to process webhook ${eventId}:`, error);
      throw error;
    }
  }

  private async handlePaymentCaptured(payment: any): Promise<void> {
    const orderId = payment.order_id;
    const paymentId = payment.id;

    if (!orderId) {
      this.logger.warn('Payment captured without order ID');
      return;
    }

    await this.paymentService.processPaymentSuccess(
      paymentId,
      orderId,
      paymentId,
      {
        method: payment.method,
        amount: payment.amount / 100, // Convert from paise
        currency: payment.currency,
        email: payment.email,
        contact: payment.contact,
      },
    );

    this.logger.log(`Payment ${paymentId} captured for order ${orderId}`);
  }

  private async handlePaymentFailed(payment: any): Promise<void> {
    const orderId = payment.order_id;
    const errorCode = payment.error_code;
    const errorDescription = payment.error_description;

    if (!orderId) {
      this.logger.warn('Payment failed without order ID');
      return;
    }

    await this.paymentService.processPaymentFailure(
      orderId,
      `${errorCode}: ${errorDescription}`,
    );

    this.logger.log(`Payment failed for order ${orderId}: ${errorCode}`);
  }

  private async handlePaymentRefunded(refund: any): Promise<void> {
    const paymentId = refund.payment_id;
    
    this.logger.log(`Refund processed for payment ${paymentId}: ${refund.id}`);
    
    // Additional refund handling if needed
  }
}
