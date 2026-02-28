import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../shared/prisma.service';
import { 
  SubscriptionPlan, 
  SubscriptionStatus,
  Currency,
  UsageMetricsDto,
  PlanDto,
  PlanLimitsDto,
  SubscribePlanDto,
} from '@org/shared-types';

// Plan configuration
const PLAN_CONFIG: Record<SubscriptionPlan, { price: number; limits: PlanLimitsDto }> = {
  [SubscriptionPlan.FREE]: {
    price: 0,
    limits: {
      invoicesPerMonth: 10,
      clients: 5,
      remindersPerMonth: 20,
      teamMembers: 1,
      customBranding: false,
      apiAccess: false,
    },
  },
  [SubscriptionPlan.STARTER]: {
    price: 499,
    limits: {
      invoicesPerMonth: 50,
      clients: 25,
      remindersPerMonth: 150,
      teamMembers: 3,
      customBranding: false,
      apiAccess: false,
    },
  },
  [SubscriptionPlan.PRO]: {
    price: 1499,
    limits: {
      invoicesPerMonth: -1, // Unlimited
      clients: -1,
      remindersPerMonth: -1,
      teamMembers: 10,
      customBranding: true,
      apiAccess: true,
    },
  },
  [SubscriptionPlan.ENTERPRISE]: {
    price: 4999,
    limits: {
      invoicesPerMonth: -1,
      clients: -1,
      remindersPerMonth: -1,
      teamMembers: -1,
      customBranding: true,
      apiAccess: true,
    },
  },
};

@Injectable()
export class BillingService {
  private readonly logger = new Logger(BillingService.name);

  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async getAvailablePlans(): Promise<PlanDto[]> {
    return Object.entries(PLAN_CONFIG).map(([plan, config]) => ({
      id: plan as SubscriptionPlan,
      name: this.getPlanName(plan as SubscriptionPlan),
      description: this.getPlanDescription(plan as SubscriptionPlan),
      price: config.price,
      currency: Currency.INR,
      billingCycle: 'monthly',
      features: this.getPlanFeatures(plan as SubscriptionPlan),
      limits: config.limits,
    }));
  }

  async getCurrentUsage(tenantId: string): Promise<UsageMetricsDto> {
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const usage = await this.prisma.usageMetrics.findUnique({
      where: {
        tenantId_month_year: {
          tenantId,
          month,
          year,
        },
      },
    });

    const tenant = await this.prisma.tenant.findUnique({
      where: { id: tenantId },
      include: { subscription: true },
    });

    if (!tenant) {
      throw new NotFoundException('Tenant not found');
    }

    const plan = tenant.plan as SubscriptionPlan;
    const limits = PLAN_CONFIG[plan].limits;

    return {
      invoicesCreated: usage?.invoicesCreated || 0,
      invoicesLimit: limits.invoicesPerMonth,
      remindersSent: usage?.remindersSent || 0,
      remindersLimit: limits.remindersPerMonth,
      clientsAdded: usage?.clientsAdded || 0,
      clientsLimit: limits.clients,
      month,
      year,
    };
  }

  async checkUsageLimit(
    tenantId: string,
    resourceType: 'invoices' | 'reminders' | 'clients',
  ): Promise<{ allowed: boolean; current: number; limit: number; percentage: number }> {
    const usage = await this.getCurrentUsage(tenantId);
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: tenantId },
    });

    if (!tenant) {
      throw new NotFoundException('Tenant not found');
    }

    const plan = tenant.plan as SubscriptionPlan;
    const limits = PLAN_CONFIG[plan].limits;

    let current: number;
    let limit: number;

    switch (resourceType) {
      case 'invoices':
        current = usage.invoicesCreated;
        limit = limits.invoicesPerMonth;
        break;
      case 'reminders':
        current = usage.remindersSent;
        limit = limits.remindersPerMonth;
        break;
      case 'clients':
        current = usage.clientsAdded;
        limit = limits.clients;
        break;
      default:
        throw new BadRequestException('Invalid resource type');
    }

    // -1 means unlimited
    if (limit === -1) {
      return { allowed: true, current, limit, percentage: 0 };
    }

    const percentage = (current / limit) * 100;
    const allowed = current < limit;

    // Emit warning event at 80% usage
    if (percentage >= 80 && percentage < 100) {
      this.logger.warn(`Tenant ${tenantId} at ${percentage.toFixed(1)}% of ${resourceType} limit`);
      // Event emission would go here
    }

    return { allowed, current, limit, percentage };
  }

  async incrementUsage(
    tenantId: string,
    resourceType: 'invoices' | 'reminders' | 'clients' | 'payments',
    amount: number = 1,
  ): Promise<void> {
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const data: any = {};
    switch (resourceType) {
      case 'invoices':
        data.invoicesCreated = { increment: amount };
        break;
      case 'reminders':
        data.remindersSent = { increment: amount };
        break;
      case 'clients':
        data.clientsAdded = { increment: amount };
        break;
      case 'payments':
        data.paymentsReceived = { increment: amount };
        break;
    }

    await this.prisma.usageMetrics.upsert({
      where: {
        tenantId_month_year: {
          tenantId,
          month,
          year,
        },
      },
      create: {
        tenantId,
        month,
        year,
        ...data,
      },
      update: data,
    });
  }

  async subscribeToPlan(tenantId: string, dto: SubscribePlanDto): Promise<any> {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: tenantId },
      include: { subscription: true },
    });

    if (!tenant) {
      throw new NotFoundException('Tenant not found');
    }

    const previousPlan = tenant.plan;
    const newPlan = dto.plan;

    if (previousPlan === newPlan) {
      throw new BadRequestException('Already subscribed to this plan');
    }

    const now = new Date();
    const periodEnd = new Date(now);
    periodEnd.setMonth(periodEnd.getMonth() + (dto.billingCycle === 'yearly' ? 12 : 1));

    // Update tenant plan
    await this.prisma.tenant.update({
      where: { id: tenantId },
      data: { plan: newPlan },
    });

    // Create or update subscription
    const subscription = await this.prisma.subscription.upsert({
      where: { tenantId },
      create: {
        tenantId,
        plan: newPlan,
        status: SubscriptionStatus.ACTIVE,
        currentPeriodStart: now,
        currentPeriodEnd: periodEnd,
      },
      update: {
        plan: newPlan,
        status: SubscriptionStatus.ACTIVE,
        currentPeriodStart: now,
        currentPeriodEnd: periodEnd,
        cancelAtPeriodEnd: false,
      },
    });

    // Determine change type
    const planOrder = [SubscriptionPlan.FREE, SubscriptionPlan.STARTER, SubscriptionPlan.PRO, SubscriptionPlan.ENTERPRISE];
    const changeType = planOrder.indexOf(newPlan as SubscriptionPlan) > planOrder.indexOf(previousPlan as SubscriptionPlan) ? 'upgrade' : 'downgrade';

    this.logger.log(`Tenant ${tenantId} ${changeType}d from ${previousPlan} to ${newPlan}`);

    return {
      subscription,
      changeType,
      previousPlan,
      newPlan,
    };
  }

  async cancelSubscription(tenantId: string, atPeriodEnd: boolean = true): Promise<any> {
    const subscription = await this.prisma.subscription.findUnique({
      where: { tenantId },
    });

    if (!subscription) {
      throw new NotFoundException('Subscription not found');
    }

    if (subscription.status === SubscriptionStatus.CANCELLED) {
      throw new BadRequestException('Subscription already cancelled');
    }

    const updated = await this.prisma.subscription.update({
      where: { tenantId },
      data: {
        cancelAtPeriodEnd: atPeriodEnd,
        ...(atPeriodEnd ? {} : {
          status: SubscriptionStatus.CANCELLED,
          cancelledAt: new Date(),
        }),
      },
    });

    this.logger.log(`Subscription for tenant ${tenantId} cancelled${atPeriodEnd ? ' at period end' : ''}`);

    return updated;
  }

  async getSubscription(tenantId: string): Promise<any> {
    const subscription = await this.prisma.subscription.findUnique({
      where: { tenantId },
    });

    if (!subscription) {
      // Return default subscription for free plan
      const tenant = await this.prisma.tenant.findUnique({
        where: { id: tenantId },
      });

      if (!tenant) {
        throw new NotFoundException('Tenant not found');
      }

      return {
        plan: tenant.plan,
        status: SubscriptionStatus.ACTIVE,
        currentPeriodStart: tenant.createdAt,
        currentPeriodEnd: new Date('2099-12-31'),
        cancelAtPeriodEnd: false,
      };
    }

    return subscription;
  }

  private getPlanName(plan: SubscriptionPlan): string {
    const names: Record<SubscriptionPlan, string> = {
      [SubscriptionPlan.FREE]: 'Free',
      [SubscriptionPlan.STARTER]: 'Starter',
      [SubscriptionPlan.PRO]: 'Professional',
      [SubscriptionPlan.ENTERPRISE]: 'Enterprise',
    };
    return names[plan];
  }

  private getPlanDescription(plan: SubscriptionPlan): string {
    const descriptions: Record<SubscriptionPlan, string> = {
      [SubscriptionPlan.FREE]: 'Perfect for trying out PayPulse',
      [SubscriptionPlan.STARTER]: 'Great for freelancers and small businesses',
      [SubscriptionPlan.PRO]: 'For growing agencies with multiple clients',
      [SubscriptionPlan.ENTERPRISE]: 'For large organizations with custom needs',
    };
    return descriptions[plan];
  }

  private getPlanFeatures(plan: SubscriptionPlan): string[] {
    const features: Record<SubscriptionPlan, string[]> = {
      [SubscriptionPlan.FREE]: [
        '10 invoices per month',
        '5 clients',
        '20 reminders per month',
        'Email reminders',
        'Basic reporting',
      ],
      [SubscriptionPlan.STARTER]: [
        '50 invoices per month',
        '25 clients',
        '150 reminders per month',
        'Email & WhatsApp reminders',
        'Advanced reporting',
        '3 team members',
      ],
      [SubscriptionPlan.PRO]: [
        'Unlimited invoices',
        'Unlimited clients',
        'Unlimited reminders',
        'All reminder channels',
        'Custom branding',
        'API access',
        '10 team members',
      ],
      [SubscriptionPlan.ENTERPRISE]: [
        'Everything in Pro',
        'Unlimited team members',
        'Priority support',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee',
      ],
    };
    return features[plan];
  }

  async getBillingInvoices(tenantId: string): Promise<any> {
    // This would fetch billing invoices from a billing invoice table
    // For now, return mock data
    return {
      data: [
        {
          id: 'inv_1',
          amount: 499,
          status: 'PAID',
          createdAt: new Date().toISOString(),
          description: 'Starter Plan - Monthly',
        },
      ],
    };
  }
}
