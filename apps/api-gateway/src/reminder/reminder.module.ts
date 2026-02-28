import { Module } from '@nestjs/common';
import { ReminderController } from './reminder.controller';
import { MicroserviceClientsModule } from '../shared/microservice-clients.module';

@Module({
  imports: [MicroserviceClientsModule],
  controllers: [ReminderController],
})
export class ReminderModule {}
