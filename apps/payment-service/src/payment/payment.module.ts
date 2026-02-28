import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { RazorpayService } from './razorpay.service';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { PrismaService } from '../shared/prisma.service';

@Module({
  imports: [ConfigModule],
  controllers: [PaymentController, WebhookController],
  providers: [
    PaymentService,
    RazorpayService,
    WebhookService,
    PrismaService,
  ],
  exports: [PaymentService, RazorpayService],
})
export class PaymentModule {}
