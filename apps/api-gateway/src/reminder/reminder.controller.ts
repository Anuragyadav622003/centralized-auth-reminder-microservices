import { Controller, Inject,Post,Body, UseGuards } from '@nestjs/common';
import { MICROSERVICE_CLIENTS } from '../shared/constants';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { AuthGuard } from '../guards/auth/auth.guard';

@Controller('reminder')
export class ReminderController {
    constructor(
    @Inject(MICROSERVICE_CLIENTS.REMINDER_SERVICE)
    private reminderClient: ClientProxy
) { }
    
    @UseGuards(AuthGuard)
    @Post()
    async reminder(@Body() body:any) {
       return await firstValueFrom(this.reminderClient.send('seed.reminder',body))
    }

}
