import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import type { AuthenticatedRequest } from '../guards/tenant.guard';
import { TenantGuard } from '../guards/tenant.guard';
import { MICROSERVICE_CLIENTS } from '../shared/constants';

@Controller('api/billing')
@UseGuards(TenantGuard)
export class BillingController {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.BILLING_SERVICE) private readonly billingClient: ClientProxy,
    @Inject(MICROSERVICE_CLIENTS.PAYMENT_SERVICE) private readonly paymentClient: ClientProxy,
  ) {}

  @Get('subscription')
  async getSubscription(@Req() req: AuthenticatedRequest) {
    return lastValueFrom(
      this.billingClient.send(
        { cmd: 'get_subscription' },
        { tenantId: req.user!.tenantId },
      ),
    );
  }

  @Get('usage')
  async getUsage(@Req() req: AuthenticatedRequest) {
    return lastValueFrom(
      this.billingClient.send(
        { cmd: 'get_usage_metrics' },
        { tenantId: req.user!.tenantId },
      ),
    );
  }

  @Get('plans')
  async getPlans() {
    return lastValueFrom(
      this.billingClient.send({ cmd: 'get_plans' }, {}),
    );
  }

  @Post('subscribe')
  async subscribe(
    @Req() req: AuthenticatedRequest,
    @Body() body: { plan: string },
  ) {
    return lastValueFrom(
      this.billingClient.send(
        { cmd: 'subscribe' },
        {
          tenantId: req.user!.tenantId,
          plan: body.plan,
        },
      ),
    );
  }

  @Post('upgrade')
  async upgrade(
    @Req() req: AuthenticatedRequest,
    @Body() body: { plan: string },
  ) {
    return lastValueFrom(
      this.billingClient.send(
        { cmd: 'upgrade' },
        {
          tenantId: req.user!.tenantId,
          plan: body.plan,
        },
      ),
    );
  }

  @Post('cancel')
  async cancelSubscription(@Req() req: AuthenticatedRequest) {
    return lastValueFrom(
      this.billingClient.send(
        { cmd: 'cancel_subscription' },
        { tenantId: req.user!.tenantId },
      ),
    );
  }

  @Get('invoices')
  async getBillingInvoices(@Req() req: AuthenticatedRequest) {
    return lastValueFrom(
      this.billingClient.send(
        { cmd: 'get_billing_invoices' },
        { tenantId: req.user!.tenantId },
      ),
    );
  }

  @Post('checkout')
  async createCheckout(
    @Req() req: AuthenticatedRequest,
    @Body() body: { plan: string; billingCycle?: 'MONTHLY' | 'YEARLY' },
  ) {
    return lastValueFrom(
      this.paymentClient.send(
        { cmd: 'create_subscription_checkout' },
        {
          tenantId: req.user!.tenantId,
          plan: body.plan,
          billingCycle: body.billingCycle || 'MONTHLY',
        },
      ),
    );
  }
}
