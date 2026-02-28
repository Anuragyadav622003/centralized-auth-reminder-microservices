import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { Queue, Worker, Job, QueueOptions, WorkerOptions } from 'bullmq';
import { ConfigService } from '@nestjs/config';
import { ReminderType, ReminderMethod } from '@org/shared-types';

// Queue names
export const QUEUE_NAMES = {
  REMINDERS: 'reminders',
  NOTIFICATIONS: 'notifications',
  WEBHOOKS: 'webhooks',
  USAGE_SYNC: 'usage-sync',
} as const;

export interface ReminderJobData {
  reminderId: string;
  invoiceId: string;
  tenantId: string;
  clientId: string;
  type: ReminderType;
  method: ReminderMethod;
  attempt: number;
  maxAttempts: number;
}

export interface NotificationJobData {
  notificationId: string;
  tenantId: string;
  channel: string;
  recipient: string;
  subject?: string;
  content: string;
  templateData?: Record<string, any>;
}

@Injectable()
export class BullmqService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(BullmqService.name);
  private queues: Map<string, Queue> = new Map();
  private workers: Map<string, Worker> = new Map();
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
    this.logger.log('Initializing BullMQ service...');
    this.initializeQueues();
  }

  async onModuleDestroy() {
    this.logger.log('Closing BullMQ connections...');
    
    // Close all workers
    for (const [name, worker] of this.workers) {
      await worker.close();
      this.logger.log(`Worker '${name}' closed`);
    }
    
    // Close all queues
    for (const [name, queue] of this.queues) {
      await queue.close();
      this.logger.log(`Queue '${name}' closed`);
    }
  }

  private initializeQueues() {
    // Create queues
    this.createQueue(QUEUE_NAMES.REMINDERS, {
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

    this.createQueue(QUEUE_NAMES.NOTIFICATIONS, {
      defaultJobOptions: {
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 3000,
        },
        removeOnComplete: 100,
        removeOnFail: 50,
      },
    });

    this.createQueue(QUEUE_NAMES.WEBHOOKS, {
      defaultJobOptions: {
        attempts: 5,
        backoff: {
          type: 'exponential',
          delay: 10000,
        },
        removeOnComplete: 50,
        removeOnFail: 100,
      },
    });

    this.createQueue(QUEUE_NAMES.USAGE_SYNC, {
      defaultJobOptions: {
        attempts: 3,
        removeOnComplete: 10,
        removeOnFail: 10,
      },
    });
  }

  private createQueue(name: string, options?: Omit<QueueOptions, 'connection'>): Queue {
    const queue = new Queue(name, {
      connection: this.connection,
      ...options,
    });

    queue.on('error', (error) => {
      this.logger.error(`Queue '${name}' error:`, error);
    });

    queue.on('waiting', (jobId) => {
      this.logger.debug(`Job ${jobId} is waiting in queue '${name}'`);
    });

    this.queues.set(name, queue);
    this.logger.log(`Queue '${name}' initialized`);
    return queue;
  }

  getQueue(name: string): Queue {
    const queue = this.queues.get(name);
    if (!queue) {
      throw new Error(`Queue '${name}' not found`);
    }
    return queue;
  }

  createWorker<T = any>(
    queueName: string,
    processor: (job: Job<T>) => Promise<any>,
    options?: Omit<WorkerOptions, 'connection'>,
  ): Worker {
    const worker = new Worker<T>(queueName, processor, {
      connection: this.connection,
      concurrency: 5,
      ...options,
    });

    worker.on('completed', (job) => {
      this.logger.log(`Job ${job.id} completed in queue '${queueName}'`);
    });

    worker.on('failed', (job, error) => {
      this.logger.error(
        `Job ${job?.id} failed in queue '${queueName}':`,
        error.message,
      );
    });

    worker.on('error', (error) => {
      this.logger.error(`Worker '${queueName}' error:`, error);
    });

    this.workers.set(queueName, worker);
    this.logger.log(`Worker for queue '${queueName}' initialized`);
    return worker;
  }

  // Helper methods for common operations

  async addReminderJob(data: ReminderJobData, delay?: number): Promise<Job<ReminderJobData>> {
    const queue = this.getQueue(QUEUE_NAMES.REMINDERS);
    return queue.add('send-reminder', data, {
      delay,
      jobId: `reminder:${data.reminderId}`,
    });
  }

  async addNotificationJob(data: NotificationJobData, delay?: number): Promise<Job<NotificationJobData>> {
    const queue = this.getQueue(QUEUE_NAMES.NOTIFICATIONS);
    return queue.add('send-notification', data, {
      delay,
    });
  }

  async removeReminderJob(reminderId: string): Promise<void> {
    const queue = this.getQueue(QUEUE_NAMES.REMINDERS);
    const job = await queue.getJob(`reminder:${reminderId}`);
    if (job) {
      await job.remove();
      this.logger.log(`Removed reminder job for ${reminderId}`);
    }
  }

  async getQueueMetrics(queueName: string) {
    const queue = this.getQueue(queueName);
    const [waiting, active, completed, failed, delayed] = await Promise.all([
      queue.getWaitingCount(),
      queue.getActiveCount(),
      queue.getCompletedCount(),
      queue.getFailedCount(),
      queue.getDelayedCount(),
    ]);

    return {
      waiting,
      active,
      completed,
      failed,
      delayed,
    };
  }

  async pauseQueue(queueName: string): Promise<void> {
    const queue = this.getQueue(queueName);
    await queue.pause();
    this.logger.log(`Queue '${queueName}' paused`);
  }

  async resumeQueue(queueName: string): Promise<void> {
    const queue = this.getQueue(queueName);
    await queue.resume();
    this.logger.log(`Queue '${queueName}' resumed`);
  }
}
