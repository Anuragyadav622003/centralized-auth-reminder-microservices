import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

import { CreateReminderDto } from './dto/create-reminder.dto';
import { Reminder, ReminderDocument } from '../shared/reminder.schema';

@Injectable()
export class RemindersService {
  constructor(
    @InjectModel(Reminder.name)
    private readonly reminderModel: Model<ReminderDocument>,
  ) {}

  create(dto: CreateReminderDto) {
   const data =  this.reminderModel.create({
      ...dto,
      remindAt: new Date(dto.remindAt),
    });
   
    return data;
  };

  findDueReminders(now: Date) {
    return this.reminderModel
      .find({
        status: 'PENDING',
      })
      .exec();
  }

  markProcessing(id: any) {
    return this.reminderModel.findOneAndUpdate(
      { _id: id, status: 'PENDING' },
      { status: 'PROCESSING' },
    );
  }

  markSent(id: any) {
    return this.reminderModel.findByIdAndUpdate(id, {
      status: 'SENT',
    });
  }

  markFailed(id: any) {
    return this.reminderModel.findByIdAndUpdate(id, {
      status: 'FAILED',
      $inc: { retryCount: 1 },
    });
  }
}

