import { Controller } from '@nestjs/common';
import { RemindersService } from './reminder.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('reminders')
export class ReminderController {
  constructor(private readonly reminderService: RemindersService) {}

  @MessagePattern("seed.reminder")
  createReminder(@Payload() dto: CreateReminderDto) {
    console.log(dto)
    return this.reminderService.create(dto);
  }
}
