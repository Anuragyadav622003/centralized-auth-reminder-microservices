import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { MicroserviceClientsModule } from '../shared/microservice-clients.module';
import { ReminderModule } from '../reminder/reminder.module';




@Module({
  imports: [ AuthModule,ReminderModule,MicroserviceClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
 