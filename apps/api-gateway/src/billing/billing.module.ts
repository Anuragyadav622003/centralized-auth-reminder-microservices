import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { MicroserviceClientsModule } from '../shared/microservice-clients.module';

@Module({
  imports: [MicroserviceClientsModule],
  controllers: [BillingController],
})
export class BillingModule {}
