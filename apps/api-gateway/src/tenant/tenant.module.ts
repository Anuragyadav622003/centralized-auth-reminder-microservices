import { Module } from '@nestjs/common';
import { TenantController } from './tenant.controller';
import { MicroserviceClientsModule } from '../shared/microservice-clients.module';
@Module({ 
  imports:[MicroserviceClientsModule],
  controllers: [TenantController],
})
export class TenantModule {}
 