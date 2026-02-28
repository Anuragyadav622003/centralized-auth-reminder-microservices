import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { AuthenticatedRequest } from './tenant.guard';
import { MICROSERVICE_CLIENTS } from '../shared/constants';

@Injectable()
export class SubscriptionGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    @Inject(MICROSERVICE_CLIENTS.BILLING_SERVICE) private readonly billingClient: ClientProxy,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const user = request.user;

    if (!user?.tenantId) {
      throw new ForbiddenException('No tenant context');
    }

    // Get required resource type from decorator
    const resourceType = this.reflector.get<string>('resourceType', context.getHandler()) ||
                        this.reflector.get<string>('resourceType', context.getClass());

    if (!resourceType) {
      return true; // No resource check required
    }

    // Check usage limit
    const usageCheck = await lastValueFrom(
      this.billingClient.send(
        { cmd: 'check_limit' },
        { tenantId: user.tenantId, resourceType },
      ),
    );

    if (!usageCheck.allowed) {
      throw new ForbiddenException(
        `Usage limit exceeded for ${resourceType}. ` +
        `Current: ${usageCheck.current}, Limit: ${usageCheck.limit}. ` +
        `Please upgrade your plan.`,
      );
    }

    // Store usage info in request for potential use in controller
    (request as any).usageInfo = usageCheck;

    return true;
  }
}
