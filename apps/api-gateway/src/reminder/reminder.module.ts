import { Module } from '@nestjs/common';
import { ReminderController } from './reminder.controller';
import { MicroserviceClientsModule } from '../shared/microservice-clients.module';
import { AuthModule } from '../auth/auth.module';
import { RedisModule } from '../shared/redis/redis.module';

@Module({
  imports:[MicroserviceClientsModule, AuthModule,RedisModule],
  providers: [],
  controllers: [ReminderController]
})
export class ReminderModule {}
