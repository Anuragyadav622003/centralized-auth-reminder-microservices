import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ReminderType, ReminderMethod, ReminderStatus } from '@org/shared-types';

export type ReminderDocument = Reminder & Document;

export interface ReminderMetadata {
  invoiceNumber: string;
  amount: number;
  currency: string;
  clientName: string;
  clientEmail?: string;
  clientPhone?: string;
  paymentLink?: string;
}

@Schema({ timestamps: true })
export class Reminder {
  @Prop({ required: true })
  invoiceId!: string;

  @Prop({ required: true })
  tenantId!: string;

  @Prop({ required: true })
  clientId!: string;

  @Prop({
    enum: ReminderType,
    required: true,
  })
  type!: ReminderType;

  @Prop({ enum: ReminderMethod, required: true })
  method!: ReminderMethod;

  @Prop({ required: true })
  scheduledAt!: Date;

  @Prop()
  sentAt?: Date;

  @Prop({
    default: ReminderStatus.PENDING,
    enum: ReminderStatus,
  })
  status!: ReminderStatus;

  @Prop({ default: 0 })
  attempt!: number;

  @Prop({ default: 3 })
  maxAttempts!: number;

  @Prop()
  errorMessage?: string;

  @Prop({ type: Object })
  metadata?: ReminderMetadata;
}

export const ReminderSchema = SchemaFactory.createForClass(Reminder);

ReminderSchema.index({ scheduledAt: 1 });
ReminderSchema.index({ status: 1 });
ReminderSchema.index({ tenantId: 1 });
ReminderSchema.index({ invoiceId: 1 });
