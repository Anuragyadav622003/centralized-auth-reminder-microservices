import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Reminder, ReminderSchema } from '../shared/reminder.schema';
import { RemindersService } from './reminder.service';
import { ReminderCron } from './reminder.cron';
import { ReminderController } from './reminder.controller';
import { EmailService } from '../shared/email.service';
import { WhatsAppService } from '../shared/whatsapp.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Reminder.name, schema: ReminderSchema },
    ]),
  ],
  providers: [RemindersService, ReminderCron,EmailService,WhatsAppService],
  exports: [RemindersService],
  controllers: [ReminderController], 
})
export class ReminderModule {}
 