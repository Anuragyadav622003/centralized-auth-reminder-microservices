import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { Reminder, ReminderDocument, ReminderMetadata } from '../shared/reminder.schema';

@Injectable()
export class RemindersService {
  private readonly logger = new Logger(RemindersService.name);

  constructor(
    @InjectModel(Reminder.name)
    private readonly reminderModel: Model<ReminderDocument>,
  ) {}

  async create(data: {
    invoiceId: string;
    tenantId: string;
    clientId: string;
    type: string;
    method: 'WHATSAPP' | 'EMAIL' | 'SMS';
    scheduledAt: Date;
    metadata?: ReminderMetadata;
  }): Promise<ReminderDocument> {
    const reminder = new this.reminderModel({
      ...data,
      status: 'PENDING',
      attempt: 0,
      maxAttempts: 3,
    });

    this.logger.log(`Created reminder for invoice ${data.invoiceId}, scheduled at ${data.scheduledAt.toISOString()}`);
    return reminder.save();
  }

  async findById(id: string): Promise<ReminderDocument | null> {
    return this.reminderModel.findById(id).exec();
  }

  async findByInvoiceId(invoiceId: string): Promise<ReminderDocument[]> {
    return this.reminderModel.find({ invoiceId }).exec();
  }

  async findDueReminders(before: Date): Promise<ReminderDocument[]> {
    return this.reminderModel
      .find({
        scheduledAt: { $lte: before },
        status: 'PENDING',
      })
      .exec();
  }

  async markSent(id: string, messageId?: string): Promise<void> {
    await this.reminderModel.findByIdAndUpdate(id, {
      status: 'SENT',
      sentAt: new Date(),
    });
    this.logger.log(`Marked reminder ${id} as sent${messageId ? ` with message ${messageId}` : ''}`);
  }

  async markFailed(id: string, errorMessage: string): Promise<void> {
    await this.reminderModel.findByIdAndUpdate(id, {
      status: 'FAILED',
      errorMessage,
      $inc: { attempt: 1 },
    });
    this.logger.warn(`Marked reminder ${id} as failed: ${errorMessage}`);
  }

  async markCancelled(id: string): Promise<void> {
    await this.reminderModel.findByIdAndUpdate(id, {
      status: 'CANCELLED',
    });
    this.logger.log(`Marked reminder ${id} as cancelled`);
  }

  async cancelRemindersForInvoice(invoiceId: string): Promise<number> {
    const result = await this.reminderModel.updateMany(
      {
        invoiceId,
        status: 'PENDING',
      },
      {
        status: 'CANCELLED',
      },
    );

    this.logger.log(`Cancelled ${result.modifiedCount} reminders for invoice ${invoiceId}`);
    return result.modifiedCount;
  }

  async getRemindersByTenant(tenantId: string, options?: {
    status?: string;
    limit?: number;
    offset?: number;
  }): Promise<ReminderDocument[]> {
    const query: any = { tenantId };
    
    if (options?.status) {
      query.status = options.status;
    }

    return this.reminderModel
      .find(query)
      .sort({ scheduledAt: -1 })
      .limit(options?.limit || 50)
      .skip(options?.offset || 0)
      .exec();
  }

  async getReminderStats(tenantId: string): Promise<{
    total: number;
    pending: number;
    sent: number;
    failed: number;
    cancelled: number;
  }> {
    const [total, pending, sent, failed, cancelled] = await Promise.all([
      this.reminderModel.countDocuments({ tenantId }),
      this.reminderModel.countDocuments({ tenantId, status: 'PENDING' }),
      this.reminderModel.countDocuments({ tenantId, status: 'SENT' }),
      this.reminderModel.countDocuments({ tenantId, status: 'FAILED' }),
      this.reminderModel.countDocuments({ tenantId, status: 'CANCELLED' }),
    ]);

    return { total, pending, sent, failed, cancelled };
  }
}

