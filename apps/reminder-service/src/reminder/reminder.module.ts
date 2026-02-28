import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Reminder, ReminderSchema } from '../shared/reminder.schema';
import { RemindersService } from './reminder.service';
import { ReminderScheduler } from './reminder.scheduler';
import { ReminderController } from './reminder.controller';
import { ReminderWorker } from './reminder.worker';
import { BullmqModule } from '../shared/bullmq.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { name: Reminder.name, schema: ReminderSchema },
    ]),
    BullmqModule,
    ClientsModule.register([
      {
        name: 'NOTIFICATION_SERVICE',
        transport: Transport.TCP,
        options: { port: 4007 },
      },
    ]),
  ],
  providers: [RemindersService, ReminderScheduler, ReminderWorker],
  exports: [RemindersService],
  controllers: [ReminderController],
})
export class ReminderModule {}
 