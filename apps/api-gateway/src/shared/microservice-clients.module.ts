import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICE_CLIENTS } from './constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICROSERVICE_CLIENTS.AUTH_SERVICE,
        transport: Transport.TCP,
        options: { port: 4001 },
      },
      {
        name: MICROSERVICE_CLIENTS.REMINDER_SERVICE,
        transport: Transport.TCP,
        options: { port: 4002 },
      },
    ]),
  ],
  exports: [
    ClientsModule, // 👈 VERY IMPORTANT
  ],
})
export class MicroserviceClientsModule {}
