import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(RedisService.name);

  private client: RedisClientType;

  constructor() {
    this.client = createClient({
      url: process.env.REDIS_URL,
      socket: {
        reconnectStrategy: (retries: number) => {
          if (retries > 10) {
            this.logger.error('Redis reconnect failed');
            return new Error('Retry attempts exhausted');
          }
          return Math.min(retries * 100, 3000);
        },
      },
    });

    this.client.on('error', (err) => {
      this.logger.error('Redis Client Error', err);
    });

    this.client.on('connect', () => {
      this.logger.log('Redis connected');
    });
  }

  async onModuleInit() {
    if (!this.client.isOpen) {
      await this.client.connect();
    }
  }

  async onModuleDestroy() {
    if (this.client.isOpen) {
      await this.client.quit();
      this.logger.log('Redis connection closed');
    }
  }

  /* ------------------- BASIC OPS ------------------- */

  async del(key: string): Promise<void> {
    await this.client.del(key);
  }

  /* ------------------- STRING ------------------- */

  // TTL in seconds (NOT milliseconds)
  async setString(
    key: string,
    value: string,
    ttlInSeconds?: number,
  ): Promise<void> {
    if (ttlInSeconds) {
      await this.client.set(key, value, {
        EX: ttlInSeconds,
      });
    } else {
      await this.client.set(key, value);
    }
  }

  async getString(key: string): Promise<string | null> {
    return this.client.get(key);
  }


  async incr(key: string): Promise<number> {
  return this.client.incr(key);
}

async ttl(key: string): Promise<number> {
  return this.client.ttl(key);
}

async expire(key: string, seconds: number): Promise<void> {
  await this.client.expire(key, seconds);
}

  /* ------------------- HEALTH CHECK ------------------- */

  async ping(): Promise<string> {
    return this.client.ping();
  }
}