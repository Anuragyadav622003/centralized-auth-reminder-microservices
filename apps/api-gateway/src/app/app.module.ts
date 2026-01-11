import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICE_CLIENTS } from './constants'


@Module({
  imports: [ClientsModule.register([
    {
      name: MICROSERVICE_CLIENTS.AUTH_SERVICE,
      transport: Transport.TCP,
      options: {
        port: 4001
      }
    },
    {
      name: MICROSERVICE_CLIENTS.REMINDER_SERVICE,
      transport: Transport.TCP,
      options: {
        port: 4002
      }
    }
  ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
