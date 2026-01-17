import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { RemindersService } from './reminder.service';
import { EmailService } from '../shared/email.service';
import { WhatsAppService } from '../shared/whatsapp.service';

@Injectable()
export class ReminderCron {
  private readonly logger = new Logger(ReminderCron.name);

  constructor(
    private readonly reminderService: RemindersService,
    private readonly emailService: EmailService,
    private readonly whatsappService: WhatsAppService,
  ) {}

  @Cron('*/5 * * * * *')
  async handleReminders() {
    const now = new Date();
    this.logger.log('⏰ Checking due reminders');

    const reminders = await this.reminderService.findDueReminders(now);

    for (const reminder of reminders) {
      console.log(reminder)
      const locked = await this.reminderService.markProcessing(reminder._id);
      if (!locked) continue;

      try {
        if ((reminder.channel === 'EMAIL' || reminder.channel === 'BOTH') && reminder.email) {
          await this.emailService.sendReminderEmail(
            reminder.email,
            'Payment Reminder',
            reminder.message,
          );
        }

        if ((reminder.channel === 'WHATSAPP' || reminder.channel === 'BOTH') && reminder.phone) {
          await this.whatsappService.sendWhatsAppMessage(
            reminder.phone,
            reminder.message,
          );
        }

        await this.reminderService.markSent(reminder._id);
      } catch (err) {
        this.logger.error(err);
        await this.reminderService.markFailed(reminder._id);
      }
    }
  }
}
