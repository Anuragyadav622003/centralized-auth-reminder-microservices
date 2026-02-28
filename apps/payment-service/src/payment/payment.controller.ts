import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PaymentService } from './payment.service';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @MessagePattern({ cmd: 'health' })
  getHealth(): { status: string; service: string } {
    return { status: 'up', service: 'payment-service' };
  }

  @MessagePattern({ cmd: 'create_payment_order' })
  async createPaymentOrder(@Payload() data: { tenantId: string; invoiceId: string }) {
    return this.paymentService.createPaymentOrder(data.tenantId, data.invoiceId);
  }

  @MessagePattern({ cmd: 'create_payment_link' })
  async createPaymentLink(@Payload() data: { tenantId: string; invoiceId: string; callbackUrl?: string }) {
    return this.paymentService.createPaymentLink(data.tenantId, data.invoiceId, data.callbackUrl);
  }

  @MessagePattern({ cmd: 'get_payment_status' })
  async getPaymentStatus(@Payload() data: { paymentId: string; tenantId: string }) {
    return this.paymentService.getPaymentStatus(data.paymentId, data.tenantId);
  }

  @MessagePattern({ cmd: 'get_payments_by_invoice' })
  async getPaymentsByInvoice(@Payload() data: { invoiceId: string; tenantId: string }) {
    return this.paymentService.getPaymentsByInvoice(data.invoiceId, data.tenantId);
  }

  @MessagePattern({ cmd: 'process_refund' })
  async processRefund(@Payload() data: { paymentId: string; tenantId: string; amount?: number; reason?: string }) {
    return this.paymentService.processRefund(data.paymentId, data.tenantId, data.amount, data.reason);
  }

  @MessagePattern({ cmd: 'verify_payment' })
  async verifyPayment(@Payload() data: { razorpayPaymentId: string; razorpayOrderId: string; razorpaySignature: string }) {
    return this.paymentService.verifyPayment(
      data.razorpayPaymentId,
      data.razorpayOrderId,
      data.razorpaySignature,
    );
  }
}
