import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../shared/prisma.service';
import { TenantRole, InvoiceStatus } from '../generated/prisma';

@Injectable()
export class TenantService {
  constructor(private prismaSevice: PrismaService) {}

  async createTenant(userId: string, data: { name: string; slug: string }) {
    return this.prismaSevice.prisma.tenant.create({
      data: {
        name: data.name,
        slug: data.slug,
        memberships: {
          create: {
            userId,
            role: 'OWNER',
          },
        },
      },
      include: {
        memberships: true,
      },
    });
  }

  async addMember(data: {
    tenantId: string;
    userId: string;
    role?: TenantRole;
  }) {
    return this.prismaSevice.prisma.membership.create({
      data: {
        tenantId: data.tenantId,
        userId: data.userId,
        role: data.role ?? TenantRole.MEMBER,
      },
    });
  }

  async getUserTenants(userId: string) {
    return this.prismaSevice.prisma.membership.findMany({
      where: { userId },
      include: {
        tenant: true,
      },
    });
  }

  async removeUserMemberships(userId: string) {
    return this.prismaSevice.prisma.membership.deleteMany({
      where: { userId },
    });
  }

  // ==================== CLIENT METHODS ====================

  async getClients(data: { tenantId: string; page?: number; limit?: number; search?: string }) {
    const { tenantId, page = 1, limit = 20, search } = data;
    const skip = (page - 1) * limit;

    const where: any = { tenantId };
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [clients, total] = await Promise.all([
      this.prismaSevice.prisma.client.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prismaSevice.prisma.client.count({ where }),
    ]);

    return {
      data: clients,
      total,
      page,
      limit,
    };
  }

  async getClient(data: { tenantId: string; clientId: string }) {
    const client = await this.prismaSevice.prisma.client.findFirst({
      where: {
        id: data.clientId,
        tenantId: data.tenantId,
      },
    });

    if (!client) {
      throw new NotFoundException('Client not found');
    }

    return client;
  }

  async createClient(data: { tenantId: string; [key: string]: any }) {
    const { tenantId, ...clientData } = data;
    return this.prismaSevice.prisma.client.create({
      data: {
        ...clientData,
        tenantId,
      } as any,
    });
  }

  async updateClient(data: { tenantId: string; clientId: string; [key: string]: any }) {
    const { tenantId, clientId, ...updateData } = data;
    
    const client = await this.prismaSevice.prisma.client.findFirst({
      where: { id: clientId, tenantId },
    });

    if (!client) {
      throw new NotFoundException('Client not found');
    }

    return this.prismaSevice.prisma.client.update({
      where: { id: clientId },
      data: updateData,
    });
  }

  async deleteClient(data: { tenantId: string; clientId: string }) {
    const client = await this.prismaSevice.prisma.client.findFirst({
      where: { id: data.clientId, tenantId: data.tenantId },
    });

    if (!client) {
      throw new NotFoundException('Client not found');
    }

    await this.prismaSevice.prisma.client.delete({
      where: { id: data.clientId },
    });

    return { message: 'Client deleted successfully' };
  }

  // ==================== INVOICE METHODS ====================

  async getInvoices(data: { tenantId: string; page?: number; limit?: number; status?: string; clientId?: string }) {
    const { tenantId, page = 1, limit = 20, status, clientId } = data;
    const skip = (page - 1) * limit;

    const where: any = { tenantId };
    if (status) {
      where.status = status as InvoiceStatus;
    }
    if (clientId) {
      where.clientId = clientId;
    }

    const [invoices, total] = await Promise.all([
      this.prismaSevice.prisma.invoice.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          client: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      }),
      this.prismaSevice.prisma.invoice.count({ where }),
    ]);

    return {
      data: invoices,
      total,
      page,
      limit,
    };
  }

  async getInvoice(data: { tenantId: string; invoiceId: string }) {
    const invoice = await this.prismaSevice.prisma.invoice.findFirst({
      where: {
        id: data.invoiceId,
        tenantId: data.tenantId,
      },
      include: {
        client: true,
        payments: true,
      },
    });

    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }

    return invoice;
  }

  async createInvoice(data: { tenantId: string; createdBy: string; [key: string]: any }) {
    const { tenantId, createdBy, ...invoiceData } = data;

    // Get next invoice number
    const tenant = await this.prismaSevice.prisma.tenant.findUnique({
      where: { id: tenantId },
      include: { settings: true },
    });

    const prefix = tenant?.settings?.invoicePrefix || 'INV';
    const nextNumber = tenant?.settings?.nextInvoiceNumber || 1;
    const invoiceNumber = `${prefix}-${new Date().getFullYear()}-${String(nextNumber).padStart(4, '0')}`;

    // Update next invoice number
    if (tenant?.settings) {
      await this.prismaSevice.prisma.tenantSettings.update({
        where: { tenantId },
        data: { nextInvoiceNumber: nextNumber + 1 },
      });
    }

    // Calculate totals
    const items = invoiceData.items || [];
    const subtotal = items.reduce((sum: number, item: any) => {
      const amount = item.quantity * item.unitPrice;
      const tax = amount * (item.taxRate || 0) / 100;
      return sum + amount + tax;
    }, 0);

    return this.prismaSevice.prisma.invoice.create({
      data: {
        ...invoiceData,
        invoiceNumber,
        amount: subtotal,
        createdById: createdBy,
        tenantId,
        lineItems: JSON.stringify(items),
      } as any,
      include: {
        client: true,
      },
    });
  }

  async updateInvoice(data: { tenantId: string; invoiceId: string; [key: string]: any }) {
    const { tenantId, invoiceId, ...updateData } = data;

    const invoice = await this.prismaSevice.prisma.invoice.findFirst({
      where: { id: invoiceId, tenantId },
    });

    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }

    // Recalculate totals if items updated
    if (updateData.items) {
      const items = updateData.items;
      const subtotal = items.reduce((sum: number, item: any) => {
        const amount = item.quantity * item.unitPrice;
        const tax = amount * (item.taxRate || 0) / 100;
        return sum + amount + tax;
      }, 0);
      updateData.amount = subtotal;
      updateData.lineItems = JSON.stringify(items);
    }

    return this.prismaSevice.prisma.invoice.update({
      where: { id: invoiceId },
      data: updateData,
      include: {
        client: true,
      },
    });
  }

  async deleteInvoice(data: { tenantId: string; invoiceId: string }) {
    const invoice = await this.prismaSevice.prisma.invoice.findFirst({
      where: { id: data.invoiceId, tenantId: data.tenantId },
    });

    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }

    await this.prismaSevice.prisma.invoice.delete({
      where: { id: data.invoiceId },
    });

    return { message: 'Invoice deleted successfully' };
  }

  async markInvoicePaid(data: { tenantId: string; invoiceId: string; paymentMethod: string; paymentDate?: string; transactionId?: string; notes?: string }) {
    const { tenantId, invoiceId, ...paymentData } = data;

    const invoice = await this.prismaSevice.prisma.invoice.findFirst({
      where: { id: invoiceId, tenantId },
    });

    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }

    // Create payment record
    await this.prismaSevice.prisma.payment.create({
      data: {
        invoiceId,
        tenantId,
        amount: invoice.amount,
        currency: invoice.currency,
        status: 'SUCCESS',
        paidAt: paymentData.paymentDate ? new Date(paymentData.paymentDate) : new Date(),
        providerPaymentId: paymentData.transactionId,
        paymentMethod: paymentData.paymentMethod,
        metadata: JSON.stringify({ notes: paymentData.notes }),
      },
    });

    // Update invoice status
    return this.prismaSevice.prisma.invoice.update({
      where: { id: invoiceId },
      data: {
        status: InvoiceStatus.PAID,
      },
      include: {
        client: true,
      },
    });
  }

  async sendInvoice(data: { tenantId: string; invoiceId: string; channels?: ('EMAIL' | 'WHATSAPP')[] }) {
    const { tenantId, invoiceId, channels } = data;

    const invoice = await this.prismaSevice.prisma.invoice.findFirst({
      where: { id: invoiceId, tenantId },
      include: { client: true },
    });

    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }

    // Update invoice status to reflect it was sent
    return this.prismaSevice.prisma.invoice.update({
      where: { id: invoiceId },
      data: {
        status: invoice.status === 'PENDING' ? 'PENDING' : invoice.status,
      },
      include: {
        client: true,
      },
    });
  }

  async getInvoiceReminders(data: { tenantId: string; invoiceId: string }) {
    const reminders = await this.prismaSevice.prisma.reminderLog.findMany({
      where: {
        invoiceId: data.invoiceId,
        tenantId: data.tenantId,
      },
      orderBy: { createdAt: 'desc' },
    });

    return { data: reminders };
  }

  // ==================== USAGE TRACKING ====================

  async incrementUsage(data: { tenantId: string; resourceType: string }) {
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const fieldMap: Record<string, string> = {
      invoices: 'invoicesCreated',
      clients: 'clientsAdded',
      reminders: 'remindersSent',
      payments: 'paymentsReceived',
    };

    const field = fieldMap[data.resourceType];
    if (!field) {
      return { message: 'Unknown resource type' };
    }

    await this.prismaSevice.prisma.usageMetrics.upsert({
      where: {
        tenantId_month_year: {
          tenantId: data.tenantId,
          month,
          year,
        },
      },
      update: {
        [field]: { increment: 1 },
      },
      create: {
        tenantId: data.tenantId,
        month,
        year,
        [field]: 1,
      },
    });

    return { message: 'Usage incremented' };
  }

  async getUsageMetrics(tenantId: string) {
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const metrics = await this.prismaSevice.prisma.usageMetrics.findUnique({
      where: {
        tenantId_month_year: {
          tenantId,
          month,
          year,
        },
      },
    });

    // Get tenant plan limits
    const tenant = await this.prismaSevice.prisma.tenant.findUnique({
      where: { id: tenantId },
    });

    const planLimits: Record<string, { invoices: number; clients: number; reminders: number }> = {
      FREE: { invoices: 10, clients: 5, reminders: 50 },
      STARTER: { invoices: 50, clients: 25, reminders: 250 },
      PRO: { invoices: 200, clients: 100, reminders: 1000 },
      ENTERPRISE: { invoices: 1000, clients: 500, reminders: 5000 },
    };

    const limits = planLimits[tenant?.plan || 'FREE'];

    return {
      invoices: {
        current: metrics?.invoicesCreated || 0,
        limit: limits.invoices,
      },
      clients: {
        current: metrics?.clientsAdded || 0,
        limit: limits.clients,
      },
      reminders: {
        current: metrics?.remindersSent || 0,
        limit: limits.reminders,
      },
    };
  }
}