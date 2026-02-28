import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../shared/prisma.service';

@Injectable()
export class UsageService {
  private readonly logger = new Logger(UsageService.name);

  constructor(private readonly prisma: PrismaService) {}

  async syncUsage(tenantId: string): Promise<any> {
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    // Count actual usage from tenant service database
    const [
      invoiceCount,
      clientCount,
      reminderCount,
      paymentCount,
    ] = await Promise.all([
      this.prisma.invoice.count({
        where: {
          tenantId,
          createdAt: {
            gte: new Date(year, month - 1, 1),
            lt: new Date(year, month, 1),
          },
        },
      }),
      this.prisma.client.count({
        where: { tenantId },
      }),
      this.prisma.reminderLog.count({
        where: {
          tenantId,
          status: 'SENT',
          sentAt: {
            gte: new Date(year, month - 1, 1),
            lt: new Date(year, month, 1),
          },
        },
      }),
      this.prisma.payment.count({
        where: {
          tenantId,
          status: 'SUCCESS',
          createdAt: {
            gte: new Date(year, month - 1, 1),
            lt: new Date(year, month, 1),
          },
        },
      }),
    ]);

    // Update usage metrics
    const usage = await this.prisma.usageMetrics.upsert({
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
        invoicesCreated: invoiceCount,
        clientsAdded: clientCount,
        remindersSent: reminderCount,
        paymentsReceived: paymentCount,
      },
      update: {
        invoicesCreated: invoiceCount,
        clientsAdded: clientCount,
        remindersSent: reminderCount,
        paymentsReceived: paymentCount,
      },
    });

    this.logger.log(`Synced usage for tenant ${tenantId}: ${JSON.stringify(usage)}`);

    return usage;
  }

  async getUsageHistory(tenantId: string, months: number = 12): Promise<any[]> {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    const usageHistory = [];

    for (let i = 0; i < months; i++) {
      let month = currentMonth - i;
      let year = currentYear;

      if (month <= 0) {
        month += 12;
        year -= 1;
      }

      const usage = await this.prisma.usageMetrics.findUnique({
        where: {
          tenantId_month_year: {
            tenantId,
            month,
            year,
          },
        },
      });

      usageHistory.push({
        month,
        year,
        invoicesCreated: usage?.invoicesCreated || 0,
        remindersSent: usage?.remindersSent || 0,
        clientsAdded: usage?.clientsAdded || 0,
        paymentsReceived: usage?.paymentsReceived || 0,
      });
    }

    return usageHistory.reverse();
  }

  async aggregateUsageForPeriod(
    tenantId: string,
    startDate: Date,
    endDate: Date,
  ): Promise<any> {
    const invoices = await this.prisma.invoice.count({
      where: {
        tenantId,
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    const reminders = await this.prisma.reminderLog.count({
      where: {
        tenantId,
        status: 'SENT',
        sentAt: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    const payments = await this.prisma.payment.aggregate({
      where: {
        tenantId,
        status: 'SUCCESS',
        paidAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      _sum: {
        amount: true,
      },
      _count: true,
    });

    return {
      invoices,
      reminders,
      payments: {
        count: payments._count,
        totalAmount: payments._sum.amount || 0,
      },
      period: {
        start: startDate,
        end: endDate,
      },
    };
  }
}
