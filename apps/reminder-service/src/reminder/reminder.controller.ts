import { Controller } from '@nestjs/common';
import { RemindersService } from './reminder.service';
import { ReminderScheduler } from './reminder.scheduler';
import { ReminderWorker } from './reminder.worker';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ReminderController {
  constructor(
    private readonly reminderService: RemindersService,
    private readonly reminderScheduler: ReminderScheduler,
    private readonly reminderWorker: ReminderWorker,
  ) {}

  @MessagePattern({ cmd: 'health' })
  getHealth(): { status: string; service: string } {
    return { status: 'up', service: 'reminder-service' };
  }

  @MessagePattern({ cmd: 'schedule_reminders' })
  async scheduleReminders(@Payload() data: {
    invoiceId: string;
    tenantId: string;
    clientId: string;
    clientName: string;
    clientEmail?: string;
    clientPhone?: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    dueDate: Date;
    reminderIntervals?: number[];
  }) {
    await this.reminderScheduler.scheduleRemindersForInvoice(data);
    return { success: true };
  }

  @MessagePattern({ cmd: 'cancel_reminders' })
  async cancelReminders(@Payload() data: { invoiceId: string }) {
    const count = await this.reminderScheduler.cancelRemindersForInvoice(data.invoiceId);
    return { success: true, cancelled: count };
  }

  @MessagePattern({ cmd: 'send_reminder_now' })
  async sendReminderNow(@Payload() data: { reminderId: string }) {
    await this.reminderWorker.processReminderImmediately(data.reminderId);
    return { success: true };
  }

  @MessagePattern({ cmd: 'get_reminders' })
  async getReminders(@Payload() data: {
    tenantId: string;
    status?: string;
    limit?: number;
    offset?: number;
  }) {
    return this.reminderService.getRemindersByTenant(data.tenantId, {
      status: data.status,
      limit: data.limit,
      offset: data.offset,
    });
  }

  @MessagePattern({ cmd: 'get_reminder_stats' })
  async getReminderStats(@Payload() data: { tenantId: string }) {
    return this.reminderService.getReminderStats(data.tenantId);
  }

  @MessagePattern({ cmd: 'get_queue_metrics' })
  async getQueueMetrics() {
    return this.reminderWorker.getQueueMetrics();
  }
}
