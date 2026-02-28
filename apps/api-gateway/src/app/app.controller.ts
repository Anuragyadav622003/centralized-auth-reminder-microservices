import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { MICROSERVICE_CLIENTS } from '../shared/constants';

@Controller()
export class AppController {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.AUTH_SERVICE) private readonly authClient: ClientProxy,
    @Inject(MICROSERVICE_CLIENTS.TENANT_SERVICE) private readonly tenantClient: ClientProxy,
    @Inject(MICROSERVICE_CLIENTS.BILLING_SERVICE) private readonly billingClient: ClientProxy,
    @Inject(MICROSERVICE_CLIENTS.PAYMENT_SERVICE) private readonly paymentClient: ClientProxy,
    @Inject(MICROSERVICE_CLIENTS.NOTIFICATION_SERVICE) private readonly notificationClient: ClientProxy,
    @Inject(MICROSERVICE_CLIENTS.REMINDER_SERVICE) private readonly reminderClient: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    return 'PayPulse API Gateway';
  }

  @Get('health')
  async getHealth(): Promise<{
    status: string;
    timestamp: string;
    services: Record<string, string>;
  }> {
    const services: Record<string, string> = {};
    const timestamp = new Date().toISOString();

    // Check each service
    const checks = [
      { name: 'auth', client: this.authClient, pattern: { cmd: 'health' } },
      { name: 'tenant', client: this.tenantClient, pattern: { cmd: 'health' } },
      { name: 'billing', client: this.billingClient, pattern: { cmd: 'health' } },
      { name: 'payment', client: this.paymentClient, pattern: { cmd: 'health' } },
      { name: 'notification', client: this.notificationClient, pattern: { cmd: 'health' } },
      { name: 'reminder', client: this.reminderClient, pattern: { cmd: 'health' } },
    ];

    for (const check of checks) {
      try {
        await lastValueFrom(
          check.client.send(check.pattern, {}).pipe(
            // Timeout after 3 seconds
          ),
        );
        services[check.name] = 'up';
      } catch {
        services[check.name] = 'down';
      }
    }

    const allUp = Object.values(services).every((s) => s === 'up');

    return {
      status: allUp ? 'healthy' : 'degraded',
      timestamp,
      services,
    };
  }

  @Get('ready')
  getReady(): { status: string } {
    return { status: 'ready' };
  }
}
