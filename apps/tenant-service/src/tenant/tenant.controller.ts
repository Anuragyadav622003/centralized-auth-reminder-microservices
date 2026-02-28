import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern, Payload } from '@nestjs/microservices';
import { TenantService } from './tenant.service';
import { TenantRole } from '../generated/prisma';

@Controller()
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @MessagePattern({ cmd: 'health' })
  getHealth(): { status: string; service: string } {
    return { status: 'up', service: 'tenant-service' };
  }

  // Request-Response
  @MessagePattern('tenant.create')
  createTenant(
    @Payload() data: { userId: string; name: string; slug: string },
  ) {
    return this.tenantService.createTenant(data.userId, data);
  }

  @MessagePattern('tenant.add_member')
  addMember(
    @Payload()
    data: { tenantId: string; userId: string; role?: TenantRole },
  ) {
    return this.tenantService.addMember(data);
  }

  @MessagePattern('tenant.get_user_tenants')
  getUserTenants(@Payload() userId: string) {
    return this.tenantService.getUserTenants(userId);
  }

  // ==================== CLIENT HANDLERS ====================

  @MessagePattern({ cmd: 'get_clients' })
  async getClients(
    @Payload() data: { tenantId: string; page?: number; limit?: number; search?: string },
  ) {
    return this.tenantService.getClients(data);
  }

  @MessagePattern({ cmd: 'get_client' })
  async getClient(
    @Payload() data: { tenantId: string; clientId: string },
  ) {
    return this.tenantService.getClient(data);
  }

  @MessagePattern({ cmd: 'create_client' })
  async createClient(
    @Payload() data: { tenantId: string; [key: string]: any },
  ) {
    return this.tenantService.createClient(data);
  }

  @MessagePattern({ cmd: 'update_client' })
  async updateClient(
    @Payload() data: { tenantId: string; clientId: string; [key: string]: any },
  ) {
    return this.tenantService.updateClient(data);
  }

  @MessagePattern({ cmd: 'delete_client' })
  async deleteClient(
    @Payload() data: { tenantId: string; clientId: string },
  ) {
    return this.tenantService.deleteClient(data);
  }

  // ==================== INVOICE HANDLERS ====================

  @MessagePattern({ cmd: 'get_invoices' })
  async getInvoices(
    @Payload() data: { tenantId: string; page?: number; limit?: number; status?: string; clientId?: string },
  ) {
    return this.tenantService.getInvoices(data);
  }

  @MessagePattern({ cmd: 'get_invoice' })
  async getInvoice(
    @Payload() data: { tenantId: string; invoiceId: string },
  ) {
    return this.tenantService.getInvoice(data);
  }

  @MessagePattern({ cmd: 'create_invoice' })
  async createInvoice(
    @Payload() data: { tenantId: string; createdBy: string; [key: string]: any },
  ) {
    return this.tenantService.createInvoice(data);
  }

  @MessagePattern({ cmd: 'update_invoice' })
  async updateInvoice(
    @Payload() data: { tenantId: string; invoiceId: string; [key: string]: any },
  ) {
    return this.tenantService.updateInvoice(data);
  }

  @MessagePattern({ cmd: 'delete_invoice' })
  async deleteInvoice(
    @Payload() data: { tenantId: string; invoiceId: string },
  ) {
    return this.tenantService.deleteInvoice(data);
  }

  @MessagePattern({ cmd: 'mark_invoice_paid' })
  async markInvoicePaid(
    @Payload() data: { tenantId: string; invoiceId: string; paymentMethod: string; paymentDate?: string; transactionId?: string; notes?: string },
  ) {
    return this.tenantService.markInvoicePaid(data);
  }

  @MessagePattern({ cmd: 'send_invoice' })
  async sendInvoice(
    @Payload() data: { tenantId: string; invoiceId: string; channels?: ('EMAIL' | 'WHATSAPP')[] },
  ) {
    return this.tenantService.sendInvoice(data);
  }

  @MessagePattern({ cmd: 'get_invoice_reminders' })
  async getInvoiceReminders(
    @Payload() data: { tenantId: string; invoiceId: string },
  ) {
    return this.tenantService.getInvoiceReminders(data);
  }

  // ==================== USAGE TRACKING ====================

  @MessagePattern({ cmd: 'increment_usage' })
  async incrementUsage(
    @Payload() data: { tenantId: string; resourceType: string },
  ) {
    return this.tenantService.incrementUsage(data);
  }

  @MessagePattern({ cmd: 'get_usage_metrics' })
  async getUsageMetrics(
    @Payload() data: { tenantId: string },
  ) {
    return this.tenantService.getUsageMetrics(data.tenantId);
  }

  // Fire-and-forget event
  @EventPattern('user.deleted')
  handleUserDeleted(@Payload() userId: string) {
    return this.tenantService.removeUserMemberships(userId);
  }
}