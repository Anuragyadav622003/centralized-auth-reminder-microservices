import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RedisService } from '../shared/redis/redis.service';
import { RATE_LIMIT_KEY, RateLimitOptions } from './rate-limit.decorator';

@Injectable()
export class RedisRateLimitGuard implements CanActivate {
  constructor(
    private readonly redis: RedisService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const rateLimitOptions =
      this.reflector.get<RateLimitOptions>(
        RATE_LIMIT_KEY,
        context.getHandler(),
      ) || {
        limit: 5,
        window: 60,
        blockDuration: 300,
      };

    const { limit, window, blockDuration } = rateLimitOptions;

    // ✅ Best practice: use request.ip (requires trust proxy in main.ts)
    const ip = request.ip || 'unknown';

    const method = request.method;
    const route = request.route?.path || request.originalUrl;

    // ✅ Prefer user-based limiting if authenticated
    const userId = request.user?.id;

    const identifier = userId
      ? `user:${userId}`
      : `ip:${ip}`;

    const key = `rate:${identifier}:${method}:${route}`;
    const blockKey = `${key}:block`;

    // 🔴 Check if blocked
    const blocked = await this.redis.getString(blockKey);
    if (blocked) {
      const ttl = await this.redis.ttl(blockKey);

      throw new HttpException(
        `Too many requests. Try again in ${ttl > 0 ? ttl : blockDuration}s`,
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    // 🔵 Increment counter
    const total = await this.redis.incr(key);

    if (total === 1) {
      await this.redis.expire(key, window);
    }

    if (total > limit) {
      await this.redis.setString(blockKey, '1', blockDuration);

      throw new HttpException(
        `Rate limit exceeded. Blocked for ${blockDuration}s`,
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    return true;
  }
}