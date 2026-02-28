import {
  Controller,
  Post,
  Body,
  Inject,
  Get,
  Param,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { MICROSERVICE_CLIENTS } from '../shared/constants';

@Controller('tenants')
export class TenantController {
  constructor( 
    @Inject(MICROSERVICE_CLIENTS.TENANT_SERVICE)
    private readonly tenantClient: ClientProxy,
  ) {}

  // Create Tenant
  @Post()
  async createTenant(@Body() body: any) {
    return firstValueFrom(
      this.tenantClient.send('tenant.create', body),
    );
  }

  // Add Member
  @Post(':tenantId/members')
  async addMember(
    @Param('tenantId') tenantId: string,
    @Body() body: { userId: string; role?: string },
  ) {
    return firstValueFrom(
      this.tenantClient.send('tenant.add_member', {
        tenantId,
        ...body,
      }),
    );
  }

  // Get User Tenants
  @Get('user/:userId')
  async getUserTenants(@Param('userId') userId: string) {
    return firstValueFrom(
      this.tenantClient.send('tenant.get_user_tenants', userId),
    );
  }
};