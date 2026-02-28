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
      {
        name: MICROSERVICE_CLIENTS.TENANT_SERVICE,
        transport: Transport.TCP,
        options: { port: 4004 },
      },
      {
        name: MICROSERVICE_CLIENTS.BILLING_SERVICE,
        transport: Transport.TCP,
        options: { port: 4005 },
      },
      {
        name: MICROSERVICE_CLIENTS.PAYMENT_SERVICE,
        transport: Transport.TCP,
        options: { port: 4006 },
      },
      {
        name: MICROSERVICE_CLIENTS.NOTIFICATION_SERVICE,
        transport: Transport.TCP,
        options: { port: 4007 },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class MicroserviceClientsModule {}
