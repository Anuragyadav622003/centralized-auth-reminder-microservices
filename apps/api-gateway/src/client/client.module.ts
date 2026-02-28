import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { MicroserviceClientsModule } from '../shared/microservice-clients.module';

@Module({
  imports: [MicroserviceClientsModule],
  controllers: [ClientController],
})
export class ClientModule {}
