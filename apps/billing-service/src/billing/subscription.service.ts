import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../shared/prisma.service';
import { SubscriptionPlan, SubscriptionStatus } from '@org/shared-types';

@Injectable()
export class SubscriptionService {
  private readonly logger = new Logger(SubscriptionService.name);

  constructor(private readonly prisma: PrismaService) {}

  async subscribeToPlan(tenantId: string, dto: any): Promise<any> {
    const now = new Date();
    const periodEnd = new Date(now);
    periodEnd.setMonth(periodEnd.getMonth() + 1);

    const subscription = await this.prisma.subscription.upsert({
      where: { tenantId },
      create: {
        tenantId,
        plan: dto.plan || SubscriptionPlan.STARTER,
        status: SubscriptionStatus.ACTIVE,
        currentPeriodStart: now,
        currentPeriodEnd: periodEnd,
        cancelAtPeriodEnd: false,
      },
      update: {
        plan: dto.plan,
        status: SubscriptionStatus.ACTIVE,
        currentPeriodStart: now,
        currentPeriodEnd: periodEnd,
        cancelAtPeriodEnd: false,
        cancelledAt: null,
        cancellationReason: null,
      },
    });

    // Update tenant plan
    await this.prisma.tenant.update({
      where: { id: tenantId },
      data: { plan: dto.plan },
    });

    this.logger.log(`Tenant ${tenantId} subscribed to ${dto.plan} plan`);
    return subscription;
  }

  async cancelSubscription(tenantId: string, atPeriodEnd: boolean = true): Promise<any> {
    const subscription = await this.prisma.subscription.update({
      where: { tenantId },
      data: {
        cancelAtPeriodEnd: atPeriodEnd,
        ...(atPeriodEnd ? {} : {
          status: SubscriptionStatus.CANCELLED,
          cancelledAt: new Date(),
        }),
      },
    });

    if (!atPeriodEnd) {
      // Immediate cancellation - downgrade to free
      await this.prisma.tenant.update({
        where: { id: tenantId },
        data: { plan: SubscriptionPlan.FREE },
      });
    }

    this.logger.log(`Subscription for tenant ${tenantId} cancelled${atPeriodEnd ? ' (at period end)' : ' (immediately)'}`);
    return subscription;
  }

  async getSubscription(tenantId: string): Promise<any> {
    return this.prisma.subscription.findUnique({
      where: { tenantId },
      include: {
        tenant: {
          select: {
            id: true,
            name: true,
            plan: true,
          },
        },
      },
    });
  }

  async handleSubscriptionRenewal(tenantId: string): Promise<void> {
    const subscription = await this.prisma.subscription.findUnique({
      where: { tenantId },
    });

    if (!subscription || subscription.status !== SubscriptionStatus.ACTIVE) {
      return;
    }

    const now = new Date();
    
    // Check if subscription period has ended
    if (subscription.currentPeriodEnd <= now) {
      if (subscription.cancelAtPeriodEnd) {
        // Cancel the subscription
        await this.prisma.subscription.update({
          where: { tenantId },
          data: {
            status: SubscriptionStatus.CANCELLED,
            cancelledAt: now,
          },
        });

        // Downgrade tenant to free plan
        await this.prisma.tenant.update({
          where: { id: tenantId },
          data: { plan: SubscriptionPlan.FREE },
        });

        this.logger.log(`Subscription for tenant ${tenantId} cancelled and downgraded to free`);
      } else {
        // Renew the subscription
        const newPeriodEnd = new Date(subscription.currentPeriodEnd);
        newPeriodEnd.setMonth(newPeriodEnd.getMonth() + 1);

        await this.prisma.subscription.update({
          where: { tenantId },
          data: {
            currentPeriodStart: subscription.currentPeriodEnd,
            currentPeriodEnd: newPeriodEnd,
          },
        });

        this.logger.log(`Subscription for tenant ${tenantId} renewed until ${newPeriodEnd}`);
      }
    }
  }

  async processFailedPayment(tenantId: string, failureReason: string): Promise<void> {
    const subscription = await this.prisma.subscription.findUnique({
      where: { tenantId },
    });

    if (!subscription) {
      return;
    }

    // Update subscription status to past_due
    await this.prisma.subscription.update({
      where: { tenantId },
      data: {
        status: SubscriptionStatus.PAST_DUE,
      },
    });

    this.logger.warn(`Payment failed for tenant ${tenantId}: ${failureReason}`);

    // TODO: Send notification to tenant owner
    // TODO: Schedule retry
  }

  async getExpiringSubscriptions(daysBeforeExpiry: number = 3): Promise<any[]> {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + daysBeforeExpiry);

    const subscriptions = await this.prisma.subscription.findMany({
      where: {
        status: SubscriptionStatus.ACTIVE,
        cancelAtPeriodEnd: false,
        currentPeriodEnd: {
          lte: expiryDate,
          gte: new Date(),
        },
      },
      include: {
        tenant: true,
      },
    });

    return subscriptions;
  }

  async getPastDueSubscriptions(): Promise<any[]> {
    const subscriptions = await this.prisma.subscription.findMany({
      where: {
        status: SubscriptionStatus.PAST_DUE,
      },
      include: {
        tenant: true,
      },
    });

    return subscriptions;
  }
}
