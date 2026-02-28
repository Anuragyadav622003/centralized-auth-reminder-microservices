import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BillingService } from './billing.service';
import { SubscriptionService } from './subscription.service';
import { UsageService } from './usage.service';

@Controller()
export class BillingController {
  constructor(
    private readonly billingService: BillingService,
    private readonly subscriptionService: SubscriptionService,
    private readonly usageService: UsageService,
  ) {}

  @MessagePattern({ cmd: 'health' })
  getHealth(): { status: string; service: string } {
    return { status: 'up', service: 'billing-service' };
  }

  @MessagePattern({ cmd: 'get_plans' })
  async getPlans() {
    return this.billingService.getAvailablePlans();
  }

  @MessagePattern({ cmd: 'get_usage' })
  async getUsage(@Payload() data: { tenantId: string }) {
    return this.billingService.getCurrentUsage(data.tenantId);
  }

  @MessagePattern({ cmd: 'check_limit' })
  async checkLimit(@Payload() data: { tenantId: string; resourceType: 'invoices' | 'reminders' | 'clients' }) {
    return this.billingService.checkUsageLimit(data.tenantId, data.resourceType);
  }

  @MessagePattern({ cmd: 'increment_usage' })
  async incrementUsage(@Payload() data: { tenantId: string; resourceType: 'invoices' | 'reminders' | 'clients' | 'payments'; amount?: number }) {
    await this.billingService.incrementUsage(data.tenantId, data.resourceType, data.amount || 1);
    return { success: true };
  }

  @MessagePattern({ cmd: 'subscribe_plan' })
  async subscribePlan(@Payload() data: { tenantId: string; dto: any }) {
    return this.subscriptionService.subscribeToPlan(data.tenantId, data.dto);
  }

  @MessagePattern({ cmd: 'cancel_subscription' })
  async cancelSubscription(@Payload() data: { tenantId: string; atPeriodEnd?: boolean }) {
    return this.subscriptionService.cancelSubscription(data.tenantId, data.atPeriodEnd ?? true);
  }

  @MessagePattern({ cmd: 'get_subscription' })
  async getSubscription(@Payload() data: { tenantId: string }) {
    return this.subscriptionService.getSubscription(data.tenantId);
  }

  @MessagePattern({ cmd: 'sync_usage' })
  async syncUsage(@Payload() data: { tenantId: string }) {
    return this.usageService.syncUsage(data.tenantId);
  }

  @MessagePattern({ cmd: 'get_usage_history' })
  async getUsageHistory(@Payload() data: { tenantId: string; months?: number }) {
    return this.usageService.getUsageHistory(data.tenantId, data.months || 12);
  }

  // Additional handlers for API Gateway compatibility
  @MessagePattern({ cmd: 'get_subscription' })
  async getSubscriptionForGateway(@Payload() data: { tenantId: string }) {
    return this.subscriptionService.getSubscription(data.tenantId);
  }

  @MessagePattern({ cmd: 'get_usage_metrics' })
  async getUsageMetrics(@Payload() data: { tenantId: string }) {
    return this.billingService.getCurrentUsage(data.tenantId);
  }

  @MessagePattern({ cmd: 'subscribe' })
  async subscribe(@Payload() data: { tenantId: string; plan: string }) {
    return this.subscriptionService.subscribeToPlan(data.tenantId, { plan: data.plan });
  }

  @MessagePattern({ cmd: 'upgrade' })
  async upgrade(@Payload() data: { tenantId: string; plan: string }) {
    return this.subscriptionService.subscribeToPlan(data.tenantId, { plan: data.plan });
  }

  @MessagePattern({ cmd: 'get_billing_invoices' })
  async getBillingInvoices(@Payload() data: { tenantId: string }) {
    return this.billingService.getBillingInvoices(data.tenantId);
  }
}
