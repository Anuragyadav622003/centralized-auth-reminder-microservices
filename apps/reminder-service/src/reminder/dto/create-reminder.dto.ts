import { IsEnum, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreateReminderDto {
  @IsNotEmpty()
  userId!: string;

  @IsEnum(['EMAIL', 'WHATSAPP', 'BOTH'])
  channel!: 'EMAIL' | 'WHATSAPP' | 'BOTH';

  @IsOptional()
  email?: string;

  @IsOptional()
  phone?: string;

  @IsNotEmpty()
  message!: string;

  @IsDateString()
  remindAt!: string;
}
