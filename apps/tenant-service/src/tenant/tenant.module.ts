import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TenantController } from './tenant.controller';
import { TenantService } from './tenant.service';
import { TenantWorker } from './tenant.worker';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [TenantController],
  providers: [TenantService, TenantWorker],
})
export class TenantModule {}
