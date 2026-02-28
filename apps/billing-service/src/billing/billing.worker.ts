import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../shared/prisma.service';
import { SubscriptionPlan, SubscriptionStatus } from '@org/shared-types';

@Injectable()
export class BillingWorker {
  private readonly logger = new Logger(BillingWorker.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Run daily at midnight to check for expired subscriptions
   */
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleExpiredSubscriptions(): Promise<void> {
    this.logger.log('Checking for expired subscriptions...');

    const now = new Date();

    // Find subscriptions that expired today
    const expiredSubscriptions = await this.prisma.subscription.findMany({
      where: {
        status: SubscriptionStatus.ACTIVE,
        currentPeriodEnd: {
          lt: now,
        },
      },
      include: {
        tenant: true,
      },
    });

    this.logger.log(`Found ${expiredSubscriptions.length} expired subscriptions`);

    for (const subscription of expiredSubscriptions) {
      try {
        if (subscription.cancelAtPeriodEnd) {
          // User chose to cancel at period end
          await this.prisma.subscription.update({
            where: { id: subscription.id },
            data: {
              status: SubscriptionStatus.CANCELLED,
              cancelledAt: now,
            },
          });

          // Downgrade to FREE plan
          await this.prisma.subscription.create({
            data: {
              tenantId: subscription.tenantId,
              plan: SubscriptionPlan.FREE,
              status: SubscriptionStatus.ACTIVE,
              currentPeriodStart: now,
              currentPeriodEnd: new Date(now.getFullYear() + 10, now.getMonth(), now.getDate()),
            },
          });

          this.logger.log(`Downgraded tenant ${subscription.tenantId} to FREE plan`);
        } else {
          // Auto-renew if payment method exists
          // In production, this would charge the payment method
          const newPeriodEnd = new Date(subscription.currentPeriodEnd);
          newPeriodEnd.setMonth(newPeriodEnd.getMonth() + 1);

          await this.prisma.subscription.update({
            where: { id: subscription.id },
            data: {
              currentPeriodStart: subscription.currentPeriodEnd,
              currentPeriodEnd: newPeriodEnd,
            },
          });

          this.logger.log(`Renewed subscription for tenant ${subscription.tenantId}`);
        }
      } catch (error: any) {
        this.logger.error(
          `Failed to process subscription ${subscription.id}:`,
          error.message,
        );
      }
    }
  }

  /**
   * Run on the 1st of every month to reset usage counters
   */
  @Cron('0 0 1 * *') // At 00:00 on day 1 of every month
  async resetMonthlyUsage(): Promise<void> {
    this.logger.log('Resetting monthly usage counters...');

    try {
      // Reset all usage metrics to 0
      const result = await this.prisma.usageMetrics.updateMany({
        where: {},
        data: {
          invoicesCreated: 0,
          remindersSent: 0,
          clientsAdded: 0,
        },
      });

      this.logger.log(`Reset usage metrics for ${result.count} tenants`);
    } catch (error: any) {
      this.logger.error('Failed to reset usage metrics:', error.message);
    }
  }

  /**
   * Run weekly to generate billing invoices for paid plans
   */
  @Cron(CronExpression.EVERY_WEEK)
  async generateBillingInvoices(): Promise<void> {
    this.logger.log('Generating billing invoices...');

    const now = new Date();
    const activeSubscriptions = await this.prisma.subscription.findMany({
      where: {
        status: SubscriptionStatus.ACTIVE,
        plan: {
          not: SubscriptionPlan.FREE,
        },
      },
      include: {
        tenant: true,
      },
    });

    for (const subscription of activeSubscriptions) {
      try {
        // Check if invoice already exists for this period
        const existingInvoice = await this.prisma.invoice.findFirst({
          where: {
            tenantId: subscription.tenantId,
            issuedDate: {
              gte: subscription.currentPeriodStart,
              lte: subscription.currentPeriodEnd,
            },
          },
        });

        if (!existingInvoice) {
          // Get plan price
          const planPrices: Record<SubscriptionPlan, number> = {
            [SubscriptionPlan.FREE]: 0,
            [SubscriptionPlan.STARTER]: 499,
            [SubscriptionPlan.PRO]: 1499,
            [SubscriptionPlan.ENTERPRISE]: 4999,
          };

          const amount = planPrices[subscription.plan];

          await this.prisma.invoice.create({
            data: {
              tenantId: subscription.tenantId,
              clientId: '', // TODO: Set appropriate client ID
              invoiceNumber: `INV-${Date.now()}`,
              amount,
              currency: 'INR',
              status: 'PENDING',
              dueDate: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000), // 7 days
            },
          });

          this.logger.log(`Generated billing invoice for tenant ${subscription.tenantId}`);
        }
      } catch (error: any) {
        this.logger.error(
          `Failed to generate invoice for tenant ${subscription.tenantId}:`,
          error.message,
        );
      }
    }
  }

  /**
   * Run daily to send trial expiration reminders
   */
  @Cron(CronExpression.EVERY_DAY_AT_NOON)
  async sendTrialReminders(): Promise<void> {
    this.logger.log('Checking for trial expirations...');

    const threeDaysFromNow = new Date();
    threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);

    const trialsExpiringSoon = await this.prisma.subscription.findMany({
      where: {
        status: SubscriptionStatus.TRIAL,
        trialEndsAt: {
          lte: threeDaysFromNow,
          gt: new Date(),
        },
      },
      include: {
        tenant: true,
      },
    });

    for (const subscription of trialsExpiringSoon) {
      const daysLeft = Math.ceil(
        (subscription.trialEndsAt!.getTime() - Date.now()) / (1000 * 60 * 60 * 24),
      );

      this.logger.log(
        `Trial for tenant ${subscription.tenantId} expires in ${daysLeft} days`,
      );

      // TODO: Send notification via notification service to tenant owner
    }
  }

  /**
   * Run hourly to sync usage metrics
   */
  @Cron(CronExpression.EVERY_HOUR)
  async syncUsageMetrics(): Promise<void> {
    this.logger.debug('Syncing usage metrics...');

    // This ensures usage metrics exist for all active tenants
    const activeTenants = await this.prisma.tenant.findMany({
      where: {
        isActive: true,
      },
    });

    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    for (const tenant of activeTenants) {
      const existingMetrics = await this.prisma.usageMetrics.findUnique({
        where: {
          tenantId_month_year: {
            tenantId: tenant.id,
            month: currentMonth,
            year: currentYear,
          },
        },
      });

      if (!existingMetrics) {
        await this.prisma.usageMetrics.create({
          data: {
            tenantId: tenant.id,
            month: currentMonth,
            year: currentYear,
            invoicesCreated: 0,
            remindersSent: 0,
            clientsAdded: 0,
          },
        });

        this.logger.debug(`Created usage metrics for tenant ${tenant.id}`);
      }
    }
  }
}
