import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../shared/prisma.service';
import { QueueService } from '../shared/queue.service';

@Injectable()
export class NotificationWorker {
  private readonly logger = new Logger(NotificationWorker.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly queueService: QueueService,
  ) {}

  /**
   * Run daily to clean up old notification logs (older than 90 days)
   */
  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  async cleanupOldLogs(): Promise<void> {
    this.logger.log('Cleaning up old notification logs...');

    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

    try {
      const result = await this.prisma.notificationLog.deleteMany({
        where: {
          createdAt: {
            lt: ninetyDaysAgo,
          },
        },
      });

      this.logger.log(`Deleted ${result.count} old notification logs`);
    } catch (error: any) {
      this.logger.error('Failed to cleanup old logs:', error.message);
    }
  }

  /**
   * Run hourly to retry failed notifications
   */
  @Cron(CronExpression.EVERY_HOUR)
  async retryFailedNotifications(): Promise<void> {
    this.logger.log('Retrying failed notifications...');

    const oneHourAgo = new Date();
    oneHourAgo.setHours(oneHourAgo.getHours() - 1);

    try {
      const failedNotifications = await this.prisma.notificationLog.findMany({
        where: {
          status: 'FAILED',
          createdAt: {
            lt: oneHourAgo,
          },
        },
        take: 100, // Process in batches
      });

      this.logger.log(`Found ${failedNotifications.length} failed notifications to retry`);

      for (const notification of failedNotifications) {
        try {
          // Re-queue the notification
          await this.queueService.addNotificationJob({
            id: notification.id,
            tenantId: notification.tenantId,
            channel: notification.channel,
            recipient: notification.recipient,
            subject: notification.subject || undefined,
            content: notification.content || '',
            templateId: notification.templateId || undefined,
            templateData: notification.templateData ? JSON.parse(notification.templateData) : undefined,
          });

          // Update retry count
          await this.prisma.notificationLog.update({
            where: { id: notification.id },
            data: {
              status: 'PENDING',
            },
          });

          this.logger.debug(`Re-queued notification ${notification.id}`);
        } catch (error: any) {
          this.logger.error(
            `Failed to retry notification ${notification.id}:`,
            error.message,
          );
        }
      }
    } catch (error: any) {
      this.logger.error('Failed to retry notifications:', error.message);
    }
  }

  /**
   * Run daily to generate notification statistics
   */
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async generateDailyStats(): Promise<void> {
    this.logger.log('Generating daily notification statistics...');

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const startOfDay = new Date(yesterday.setHours(0, 0, 0, 0));
    const endOfDay = new Date(yesterday.setHours(23, 59, 59, 999));

    try {
      // Get stats by channel
      const stats = await this.prisma.notificationLog.groupBy({
        by: ['channel', 'status'],
        where: {
          createdAt: {
            gte: startOfDay,
            lte: endOfDay,
          },
        },
        _count: {
          id: true,
        },
      });

      this.logger.log('Daily notification stats:', stats);

      // TODO: Store aggregated stats or send to analytics service
    } catch (error: any) {
      this.logger.error('Failed to generate stats:', error.message);
    }
  }

  /**
   * Run every 5 minutes to check queue health
   */
  @Cron(CronExpression.EVERY_5_MINUTES)
  async checkQueueHealth(): Promise<void> {
    try {
      const queueMetrics = await this.queueService.getQueueMetrics();

      // Alert if queue is backing up
      if (queueMetrics.waiting > 1000) {
        this.logger.warn(
          `Notification queue backing up: ${queueMetrics.waiting} waiting jobs`,
        );
      }

      if (queueMetrics.failed > 100) {
        this.logger.warn(
          `High number of failed notifications: ${queueMetrics.failed}`,
        );
      }
    } catch (error: any) {
      this.logger.error('Failed to check queue health:', error.message);
    }
  }

  /**
   * Run weekly to clean up orphaned jobs in the queue
   */
  @Cron(CronExpression.EVERY_WEEK)
  async cleanupOrphanedJobs(): Promise<void> {
    this.logger.log('Cleaning up orphaned queue jobs...');

    try {
      // Clean completed jobs older than 7 days
      await this.queueService.cleanOldJobs(7 * 24 * 60 * 60 * 1000);

      this.logger.log('Cleaned up old queue jobs');
    } catch (error: any) {
      this.logger.error('Failed to cleanup orphaned jobs:', error.message);
    }
  }
}
