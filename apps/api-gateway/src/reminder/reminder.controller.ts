import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  UseGuards,
  Req,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import type { AuthenticatedRequest } from '../guards/tenant.guard';
import { TenantGuard } from '../guards/tenant.guard';
import { MICROSERVICE_CLIENTS } from '../shared/constants';

@Controller('api/reminders')
@UseGuards(TenantGuard)
export class ReminderController {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.REMINDER_SERVICE) private readonly reminderClient: ClientProxy,
  ) {}

  @Get()
  async getReminders(
    @Req() req: AuthenticatedRequest,
    @Query('status') status?: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number,
  ) {
    return lastValueFrom(
      this.reminderClient.send(
        { cmd: 'get_reminders' },
        {
          tenantId: req.user!.tenantId,
          status,
          limit,
          offset,
        },
      ),
    );
  }

  @Get('stats')
  async getReminderStats(@Req() req: AuthenticatedRequest) {
    return lastValueFrom(
      this.reminderClient.send(
        { cmd: 'get_reminder_stats' },
        { tenantId: req.user!.tenantId },
      ),
    );
  }

  @Get('queue-metrics')
  async getQueueMetrics() {
    return lastValueFrom(
      this.reminderClient.send({ cmd: 'get_queue_metrics' }, {}),
    );
  }

  @Post(':id/send-now')
  async sendReminderNow(@Param('id') id: string) {
    return lastValueFrom(
      this.reminderClient.send(
        { cmd: 'send_reminder_now' },
        { reminderId: id },
      ),
    );
  }
}
