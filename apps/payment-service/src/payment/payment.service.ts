import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../shared/prisma.service';
import { RazorpayService } from './razorpay.service';
import { PaymentStatus, PaymentProvider } from '@org/shared-types';
// Events can be emitted here when payment processing is integrated with the event bus

@Injectable()
export class PaymentService {
  private readonly logger = new Logger(PaymentService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly razorpayService: RazorpayService,
    private readonly configService: ConfigService,
  ) {}

  async createPaymentOrder(
    tenantId: string,
    invoiceId: string,
  ): Promise<any> {
    // Get invoice details
    const invoice = await this.prisma.invoice.findFirst({
      where: {
        id: invoiceId,
        tenantId,
      },
    });

    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }

    if (invoice.status === 'PAID') {
      throw new BadRequestException('Invoice already paid');
    }

    // Create Razorpay order
    const order = await this.razorpayService.createOrder(
      invoice.amount,
      invoice.currency,
      invoice.invoiceNumber,
      {
        invoiceId: invoice.id,
        tenantId: invoice.tenantId,
        clientId: invoice.clientId,
      },
    );

    // Update invoice with order ID
    await this.prisma.invoice.update({
      where: { id: invoiceId },
      data: {
        razorpayOrderId: order.id,
      },
    });

    // Create payment record
    const payment = await this.prisma.payment.create({
      data: {
        invoiceId,
        tenantId,
        amount: invoice.amount,
        currency: invoice.currency,
        provider: PaymentProvider.RAZORPAY,
        providerOrderId: order.id,
        status: PaymentStatus.PENDING,
      },
    });

    this.logger.log(`Created payment order for invoice ${invoiceId}: ${order.id}`);

    return {
      orderId: order.id,
      amount: invoice.amount,
      currency: invoice.currency,
      receipt: invoice.invoiceNumber,
      keyId: this.razorpayService.getKeyId(),
      paymentId: payment.id,
    };
  }

  async createPaymentLink(
    tenantId: string,
    invoiceId: string,
    callbackUrl?: string,
  ): Promise<any> {
    const invoice = await this.prisma.invoice.findFirst({
      where: {
        id: invoiceId,
        tenantId,
      },
    });

    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }

    if (invoice.status === 'PAID') {
      throw new BadRequestException('Invoice already paid');
    }

    const paymentLink = await this.razorpayService.createPaymentLink({
      amount: invoice.amount,
      currency: invoice.currency,
      description: `Payment for Invoice ${invoice.invoiceNumber}`,
      callback_url: callbackUrl,
    });

    // Update invoice with payment link
    await this.prisma.invoice.update({
      where: { id: invoiceId },
      data: {
        paymentLink: paymentLink.short_url,
      },
    });

    this.logger.log(`Created payment link for invoice ${invoiceId}: ${paymentLink.short_url}`);

    return {
      linkId: paymentLink.id,
      url: paymentLink.short_url,
      expiry: paymentLink.expire_by ? new Date(paymentLink.expire_by * 1000) : null,
    };
  }

  async processPaymentSuccess(
    paymentId: string,
    orderId: string,
    razorpayPaymentId: string,
    metadata?: any,
  ): Promise<any> {
    // Find payment by order ID
    const payment = await this.prisma.payment.findFirst({
      where: {
        providerOrderId: orderId,
      },
      include: {
        invoice: true,
      },
    });

    if (!payment) {
      throw new NotFoundException('Payment not found');
    }

    // Check if already processed (idempotency)
    if (payment.status === PaymentStatus.SUCCESS) {
      this.logger.log(`Payment ${payment.id} already processed`);
      return payment;
    }

    // Update payment status
    const updatedPayment = await this.prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: PaymentStatus.SUCCESS,
        providerPaymentId: razorpayPaymentId,
        paidAt: new Date(),
        metadata: metadata ? JSON.stringify(metadata) : null,
        paymentMethod: metadata?.method,
      },
    });

    // Update invoice status
    await this.prisma.invoice.update({
      where: { id: payment.invoiceId },
      data: {
        status: 'PAID',
        razorpayPaymentId,
      },
    });

    this.logger.log(`Payment ${payment.id} marked as successful`);

    return updatedPayment;
  }

  async processPaymentFailure(
    orderId: string,
    failureReason: string,
  ): Promise<any> {
    const payment = await this.prisma.payment.findFirst({
      where: {
        providerOrderId: orderId,
      },
    });

    if (!payment) {
      throw new NotFoundException('Payment not found');
    }

    const updatedPayment = await this.prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: PaymentStatus.FAILED,
        failureReason,
      },
    });

    this.logger.warn(`Payment ${payment.id} failed: ${failureReason}`);

    return updatedPayment;
  }

  async getPaymentStatus(paymentId: string, tenantId: string): Promise<any> {
    const payment = await this.prisma.payment.findFirst({
      where: {
        id: paymentId,
        tenantId,
      },
      include: {
        invoice: {
          select: {
            id: true,
            invoiceNumber: true,
            amount: true,
            status: true,
          },
        },
      },
    });

    if (!payment) {
      throw new NotFoundException('Payment not found');
    }

    return payment;
  }

  async getPaymentsByInvoice(invoiceId: string, tenantId: string): Promise<any[]> {
    const payments = await this.prisma.payment.findMany({
      where: {
        invoiceId,
        tenantId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return payments;
  }

  async processRefund(
    paymentId: string,
    tenantId: string,
    amount?: number,
    reason?: string,
  ): Promise<any> {
    const payment = await this.prisma.payment.findFirst({
      where: {
        id: paymentId,
        tenantId,
        status: PaymentStatus.SUCCESS,
      },
    });

    if (!payment) {
      throw new NotFoundException('Payment not found or not successful');
    }

    if (!payment.providerPaymentId) {
      throw new BadRequestException('Payment provider ID not found');
    }

    // Calculate refund amount
    const refundAmount = amount || payment.amount;

    if (refundAmount > payment.amount) {
      throw new BadRequestException('Refund amount cannot exceed payment amount');
    }

    // Create refund in Razorpay
    const refund = await this.razorpayService.createRefund(
      payment.providerPaymentId,
      refundAmount,
      { reason: reason || 'Customer request' },
    );

    // Update payment record
    const updatedPayment = await this.prisma.payment.update({
      where: { id: paymentId },
      data: {
        refundAmount,
        refundedAt: new Date(),
        refundReason: reason,
        status: refundAmount >= payment.amount ? PaymentStatus.REFUNDED : PaymentStatus.PARTIAL,
      },
    });

    // Update invoice status if full refund
    if (refundAmount >= payment.amount) {
      await this.prisma.invoice.update({
        where: { id: payment.invoiceId },
        data: {
          status: 'CANCELLED',
        },
      });
    }

    this.logger.log(`Processed refund for payment ${paymentId}: ${refund.id}`);

    return {
      payment: updatedPayment,
      refundId: refund.id,
      refundAmount,
    };
  }

  async verifyPayment(
    razorpayPaymentId: string,
    razorpayOrderId: string,
    razorpaySignature: string,
  ): Promise<boolean> {
    const secret = this.configService.get<string>('RAZORPAY_KEY_SECRET');
    if (!secret) {
      throw new BadRequestException('Razorpay secret not configured');
    }

    const body = `${razorpayOrderId}|${razorpayPaymentId}`;
    return this.razorpayService.verifyWebhookSignature(body, razorpaySignature, secret);
  }
}
