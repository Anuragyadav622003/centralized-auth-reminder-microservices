import { Document } from 'mongoose';

export interface Reminder extends Document {
  userId: string;
  channel: 'EMAIL' | 'WHATSAPP' | 'BOTH';
  email?: string;
  phone?: string;
  message: string;
  remindAt: Date;
  status: 'PENDING' | 'SENT' | 'FAILED';
  retryCount: number;
}
