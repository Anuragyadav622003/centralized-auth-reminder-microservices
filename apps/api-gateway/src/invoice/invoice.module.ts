import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { MicroserviceClientsModule } from '../shared/microservice-clients.module';

@Module({
  imports: [MicroserviceClientsModule],
  controllers: [InvoiceController],
})
export class InvoiceModule {}
