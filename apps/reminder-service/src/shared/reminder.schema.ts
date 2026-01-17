import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReminderDocument = Reminder & Document;

@Schema({ timestamps: true })
export class Reminder {
  @Prop({ required: true })
  userId!: string;

  @Prop({ enum: ['EMAIL', 'WHATSAPP', 'BOTH'], required: true })
  channel!: 'EMAIL' | 'WHATSAPP' | 'BOTH';

  @Prop()
  email?: string;

  @Prop()
  phone?: string;

  @Prop({ required: true })
  message!: string;

  @Prop({ required: true })
  remindAt!: Date;

  @Prop({
  default: 'PENDING',
  enum: ['PENDING', 'PROCESSING', 'SENT', 'FAILED'],
})
status!: 'PENDING' | 'PROCESSING' | 'SENT' | 'FAILED';

  @Prop({ default: 0 })
  retryCount!: number;
}

export const ReminderSchema = SchemaFactory.createForClass(Reminder);


ReminderSchema.index({ remindAt: 1 });
ReminderSchema.index({ status: 1 });
