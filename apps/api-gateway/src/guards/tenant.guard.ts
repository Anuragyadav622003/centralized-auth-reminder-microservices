import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { Request } from 'express';
import { TenantRole } from '@org/shared-types';
import { MICROSERVICE_CLIENTS } from '../shared/constants';

export interface AuthenticatedRequest extends Request {
  user?: {
    sub: string;
    email: string;
    tenantId: string;
    role: TenantRole;
  };
}

@Injectable()
export class TenantGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    @Inject(MICROSERVICE_CLIENTS.TENANT_SERVICE) private readonly tenantClient: ClientProxy,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const user = request.user;

    if (!user) {
      throw new UnauthorizedException('User not authenticated');
    }

    if (!user.tenantId) {
      throw new ForbiddenException('No tenant assigned');
    }

    // Check if tenant is active
    try {
      const tenant = await lastValueFrom(
        this.tenantClient.send({ cmd: 'get_tenant' }, { tenantId: user.tenantId }),
      );

      if (!tenant || !tenant.isActive) {
        throw new ForbiddenException('Tenant is inactive or suspended');
      }
    } catch (error) {
      throw new ForbiddenException('Failed to verify tenant');
    }

    // Check required roles if specified
    const requiredRoles = this.reflector.get<TenantRole[]>('roles', context.getHandler()) ||
                         this.reflector.get<TenantRole[]>('roles', context.getClass());

    if (requiredRoles && requiredRoles.length > 0) {
      if (!requiredRoles.includes(user.role)) {
        throw new ForbiddenException('Insufficient permissions');
      }
    }

    return true;
  }
}
