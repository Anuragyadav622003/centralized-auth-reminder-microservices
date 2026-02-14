import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { MicroserviceClientsModule } from '../shared/microservice-clients.module';
import { ReminderModule } from '../reminder/reminder.module';
import { ThrottlerModule } from '@nestjs/throttler';




@Module({
  imports: [ AuthModule,ReminderModule,MicroserviceClientsModule,
 ThrottlerModule.forRoot({
  throttlers:[
    {
      ttl:15*60*1000,
      limit:100,
  
    }
  ]
 })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
 