import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { Queue, Worker, Job } from 'bullmq';
import { ConfigService } from '@nestjs/config';
import { NotificationChannel } from '../generated/prisma';

export interface NotificationJobData {
  id: string;
  tenantId: string;
  channel: NotificationChannel;
  recipient: string;
  subject?: string;
  content: string;
  templateId?: string;
  templateData?: Record<string, any>;
  attempt?: number;
  maxAttempts?: number;
}

export const NOTIFICATION_QUEUE = 'notifications';

@Injectable()
export class QueueService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(QueueService.name);
  private notificationQueue!: Queue<NotificationJobData>;
  private worker!: Worker<NotificationJobData>;
  private connection: { host: string; port: number };

  constructor(private readonly configService: ConfigService) {
    const redisUrl = this.configService.get<string>('REDIS_URL') || 'redis://localhost:6379';
    const url = new URL(redisUrl);
    this.connection = {
      host: url.hostname || 'localhost',
      port: parseInt(url.port || '6379', 10),
    };
  }

  async onModuleInit() {
    this.logger.log('Initializing notification queue...');
    
    this.notificationQueue = new Queue<NotificationJobData>(NOTIFICATION_QUEUE, {
      connection: this.connection,
      defaultJobOptions: {
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 5000,
        },
        removeOnComplete: 100,
        removeOnFail: 50,
      },
    });

    this.notificationQueue.on('error', (error) => {
      this.logger.error('Notification queue error:', error);
    });

    this.logger.log('Notification queue initialized');
  }

  async onModuleDestroy() {
    this.logger.log('Closing notification queue...');
    if (this.worker) {
      await this.worker.close();
    }
    if (this.notificationQueue) {
      await this.notificationQueue.close();
    }
  }

  getQueue(): Queue<NotificationJobData> {
    return this.notificationQueue;
  }

  async addNotificationJob(
    data: NotificationJobData,
    options?: { delay?: number; priority?: number },
  ): Promise<Job<NotificationJobData>> {
    const jobId = `notification:${data.id}`;
    return this.notificationQueue.add('send-notification', {
      ...data,
      attempt: data.attempt || 0,
      maxAttempts: data.maxAttempts || 3,
    }, {
      jobId,
      ...options,
    });
  }

  async addBulkNotificationJobs(
    jobs: Array<{ data: NotificationJobData; options?: { delay?: number; priority?: number } }>,
  ): Promise<Job<NotificationJobData>[]> {
    const bulkJobs = jobs.map(({ data, options }) => ({
      name: 'send-notification',
      data: {
        ...data,
        attempt: data.attempt || 0,
        maxAttempts: data.maxAttempts || 3,
      },
      opts: {
        jobId: `notification:${data.id}`,
        ...options,
      },
    }));

    return this.notificationQueue.addBulk(bulkJobs);
  }

  createWorker(
    processor: (job: Job<NotificationJobData>) => Promise<any>,
  ): Worker<NotificationJobData> {
    this.worker = new Worker<NotificationJobData>(NOTIFICATION_QUEUE, processor, {
      connection: this.connection,
      concurrency: 10,
    });

    this.worker.on('completed', (job) => {
      this.logger.log(`Notification job ${job.id} completed`);
    });

    this.worker.on('failed', (job, error) => {
      this.logger.error(`Notification job ${job?.id} failed:`, error.message);
    });

    this.worker.on('error', (error) => {
      this.logger.error('Notification worker error:', error);
    });

    return this.worker;
  }

  async getJobStatus(jobId: string): Promise<{ status: string; progress: number } | null> {
    const job = await this.notificationQueue.getJob(jobId);
    if (!job) return null;

    const state = await job.getState();
    return {
      status: state,
      progress: job.progress as number,
    };
  }

  async getQueueMetrics() {
    const [waiting, active, completed, failed, delayed] = await Promise.all([
      this.notificationQueue.getWaitingCount(),
      this.notificationQueue.getActiveCount(),
      this.notificationQueue.getCompletedCount(),
      this.notificationQueue.getFailedCount(),
      this.notificationQueue.getDelayedCount(),
    ]);

    return {
      waiting,
      active,
      completed,
      failed,
      delayed,
    };
  }

  async pause(): Promise<void> {
    await this.notificationQueue.pause();
    this.logger.log('Notification queue paused');
  }

  async resume(): Promise<void> {
    await this.notificationQueue.resume();
    this.logger.log('Notification queue resumed');
  }

  async cleanOldJobs(gracePeriodMs: number = 24 * 60 * 60 * 1000): Promise<void> {
    await this.notificationQueue.clean(gracePeriodMs, 100, 'completed');
    await this.notificationQueue.clean(gracePeriodMs, 100, 'failed');
    this.logger.log('Old notification jobs cleaned');
  }
}
