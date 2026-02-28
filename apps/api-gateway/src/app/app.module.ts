import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { MicroserviceClientsModule } from '../shared/microservice-clients.module';
import { ReminderModule } from '../reminder/reminder.module';
import { RedisModule } from '../shared/redis/redis.module';
import { APP_GUARD } from '@nestjs/core';
import { RedisRateLimitGuard } from '../guards/redis-rate-limit.guard';
import { TenantModule } from '../tenant/tenant.module';
import { ClientModule } from '../client/client.module';
import { InvoiceModule } from '../invoice/invoice.module';
import { BillingModule } from '../billing/billing.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    TenantModule,
    ClientModule,
    InvoiceModule,
    BillingModule,
    ReminderModule,
    MicroserviceClientsModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RedisRateLimitGuard,
    },
  ],
})
export class AppModule {}
