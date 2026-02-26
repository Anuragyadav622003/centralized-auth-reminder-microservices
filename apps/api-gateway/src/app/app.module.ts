import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { MicroserviceClientsModule } from '../shared/microservice-clients.module'; ``
import { ReminderModule } from '../reminder/reminder.module';
import { RedisModule } from '../shared/redis/redis.module';
import { APP_GUARD } from '@nestjs/core';
import { RedisRateLimitGuard } from '../guards/redis-rate-limit.guard';




@Module({
  imports: [AuthModule, ReminderModule, MicroserviceClientsModule, RedisModule,],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: RedisRateLimitGuard,
    },],
})
export class AppModule { }
