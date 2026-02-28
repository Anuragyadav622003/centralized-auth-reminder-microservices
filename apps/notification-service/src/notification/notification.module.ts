import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { NotificationWorker } from './notification.worker';
import { WhatsAppService } from './whatsapp.service';
import { EmailService } from './email.service';
import { TemplateService } from './template.service';
import { QueueService } from '../shared/queue.service';
import { PrismaService } from '../shared/prisma.service';

@Module({
  imports: [ConfigModule, ScheduleModule.forRoot()],
  controllers: [NotificationController],
  providers: [
    NotificationService,
    NotificationWorker,
    WhatsAppService,
    EmailService,
    TemplateService,
    QueueService,
    PrismaService,
  ],
  exports: [NotificationService],
})
export class NotificationModule {}
