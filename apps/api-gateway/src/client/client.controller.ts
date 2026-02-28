import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import type { AuthenticatedRequest } from '../guards/tenant.guard';
import { TenantGuard } from '../guards/tenant.guard';
import { SubscriptionGuard } from '../guards/subscription.guard';
import { ResourceType } from '../guards/subscription.decorator';
import { MICROSERVICE_CLIENTS } from '../shared/constants';

@Controller('api/clients')
@UseGuards(TenantGuard)
export class ClientController {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.TENANT_SERVICE) private readonly tenantClient: ClientProxy,
  ) {}

  @Get()
  async getClients(
    @Req() req: AuthenticatedRequest,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
  ) {
    return lastValueFrom(
      this.tenantClient.send(
        { cmd: 'get_clients' },
        {
          tenantId: req.user!.tenantId,
          page: page || 1,
          limit: limit || 20,
          search,
        },
      ),
    );
  }

  @Post()
  @UseGuards(SubscriptionGuard)
  @ResourceType('clients')
  async createClient(
    @Req() req: AuthenticatedRequest,
    @Body() body: {
      name: string;
      email?: string;
      phone?: string;
      gstin?: string;
      pan?: string;
      billingAddress?: any;
      shippingAddress?: any;
      notes?: string;
      tags?: string[];
      paymentTerms?: number;
    },
  ) {
    const result = await lastValueFrom(
      this.tenantClient.send(
        { cmd: 'create_client' },
        {
          tenantId: req.user!.tenantId,
          ...body,
        },
      ),
    );

    // Increment usage
    await lastValueFrom(
      this.tenantClient.send(
        { cmd: 'increment_usage' },
        { tenantId: req.user!.tenantId, resourceType: 'clients' },
      ),
    );

    return result;
  }

  @Get(':id')
  async getClient(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
  ) {
    return lastValueFrom(
      this.tenantClient.send(
        { cmd: 'get_client' },
        {
          tenantId: req.user!.tenantId,
          clientId: id,
        },
      ),
    );
  }

  @Put(':id')
  async updateClient(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
    @Body() body: {
      name?: string;
      email?: string;
      phone?: string;
      gstin?: string;
      pan?: string;
      billingAddress?: any;
      shippingAddress?: any;
      notes?: string;
      tags?: string[];
      paymentTerms?: number;
    },
  ) {
    return lastValueFrom(
      this.tenantClient.send(
        { cmd: 'update_client' },
        {
          tenantId: req.user!.tenantId,
          clientId: id,
          ...body,
        },
      ),
    );
  }

  @Delete(':id')
  async deleteClient(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
  ) {
    return lastValueFrom(
      this.tenantClient.send(
        { cmd: 'delete_client' },
        {
          tenantId: req.user!.tenantId,
          clientId: id,
        },
      ),
    );
  }
}
