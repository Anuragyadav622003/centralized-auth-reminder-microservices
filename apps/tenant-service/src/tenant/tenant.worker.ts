import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../shared/prisma.service';

@Injectable()
export class TenantWorker {
  private readonly logger = new Logger(TenantWorker.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Run daily to clean up soft-deleted records older than 30 days
   * Note: Soft delete fields (deletedAt) would need to be added to schema for full implementation
   */
  @Cron(CronExpression.EVERY_DAY_AT_2AM)
  async cleanupDeletedRecords(): Promise<void> {
    this.logger.log('Cleaning up soft-deleted records...');
    // TODO: Add deletedAt fields to schema for soft delete support
    this.logger.log('Soft delete cleanup skipped - schema fields not available');
  }

  /**
   * Run weekly to archive old invoices (older than 1 year)
   * Note: isArchived field would need to be added to schema for full implementation
   */
  @Cron(CronExpression.EVERY_WEEK)
  async archiveOldInvoices(): Promise<void> {
    this.logger.log('Archiving old invoices...');
    // TODO: Add isArchived field to Invoice schema for archive support
    this.logger.log('Invoice archiving skipped - schema field not available');
  }

  /**
   * Run daily to identify and flag inactive tenants
   * Note: lastActivityAt field would need to be added to schema for full implementation
   */
  @Cron(CronExpression.EVERY_DAY_AT_3AM)
  async flagInactiveTenants(): Promise<void> {
    this.logger.log('Checking for inactive tenants...');
    // TODO: Add lastActivityAt field to Tenant schema for activity tracking
    this.logger.log('Inactive tenant check skipped - schema field not available');
  }

  /**
   * Run hourly to update tenant statistics
   */
  @Cron(CronExpression.EVERY_HOUR)
  async updateTenantStats(): Promise<void> {
    this.logger.debug('Updating tenant statistics...');

    try {
      const tenants = await this.prisma.prisma.tenant.findMany({
        where: { isActive: true },
      });

      for (const tenant of tenants) {
        const [
          totalInvoices,
          totalClients,
        ] = await Promise.all([
          this.prisma.prisma.invoice.count({
            where: { tenantId: tenant.id },
          }),
          this.prisma.prisma.client.count({
            where: { tenantId: tenant.id },
          }),
        ]);

        // Update tenant stats (would need a stats field in schema)
        this.logger.debug(
          `Tenant ${tenant.id}: ${totalInvoices} invoices, ${totalClients} clients`,
        );
      }
    } catch (error: any) {
      this.logger.error('Failed to update tenant stats:', error.message);
    }
  }

  /**
   * Run daily to send overdue invoice reports to tenants
   */
  @Cron(CronExpression.EVERY_DAY_AT_9AM)
  async generateOverdueReports(): Promise<void> {
    this.logger.log('Generating overdue invoice reports...');

    const today = new Date();

    try {
      // Find all tenants with overdue invoices
      const tenantsWithOverdue = await this.prisma.prisma.tenant.findMany({
        where: {
          isActive: true,
          invoices: {
            some: {
              status: 'OVERDUE',
              dueDate: {
                lt: today,
              },
            },
          },
        },
        include: {
          invoices: {
            where: {
              status: 'OVERDUE',
              dueDate: {
                lt: today,
              },
            },
          },
        },
      });

      for (const tenant of tenantsWithOverdue) {
        const totalOverdue = tenant.invoices.reduce(
          (sum, inv) => sum + inv.amount,
          0,
        );

        this.logger.log(
          `Tenant ${tenant.id} has ${tenant.invoices.length} overdue invoices totaling ₹${totalOverdue}`,
        );

        // TODO: Send daily report via notification service
      }
    } catch (error: any) {
      this.logger.error('Failed to generate overdue reports:', error.message);
    }
  }
}
