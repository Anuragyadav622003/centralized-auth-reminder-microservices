import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { BillingService } from './billing.service';
import { BillingController } from './billing.controller';
import { SubscriptionService } from './subscription.service';
import { UsageService } from './usage.service';
import { BillingWorker } from './billing.worker';
import { PrismaService } from '../shared/prisma.service';

@Module({
  imports: [ConfigModule, ScheduleModule.forRoot()],
  controllers: [BillingController],
  providers: [
    BillingService,
    BillingWorker,
    SubscriptionService,
    UsageService,
    PrismaService,
  ],
  exports: [BillingService, SubscriptionService, UsageService],
})
export class BillingModule {}
