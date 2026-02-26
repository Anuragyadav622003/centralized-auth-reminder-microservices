import { SetMetadata } from '@nestjs/common';

export const RATE_LIMIT_KEY = 'rate_limit';

export interface RateLimitOptions {
  limit: number;
  window: number;        // seconds
  blockDuration: number; // seconds
}

export const RateLimit = (
  limit: number,
  window: number,
  blockDuration: number,
) =>
  SetMetadata(RATE_LIMIT_KEY, {
    limit,
    window,
    blockDuration,
  });