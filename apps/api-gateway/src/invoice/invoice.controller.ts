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

@Controller('api/invoices')
@UseGuards(TenantGuard)
export class InvoiceController {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.TENANT_SERVICE) private readonly tenantClient: ClientProxy,
    @Inject(MICROSERVICE_CLIENTS.REMINDER_SERVICE) private readonly reminderClient: ClientProxy,
    @Inject(MICROSERVICE_CLIENTS.PAYMENT_SERVICE) private readonly paymentClient: ClientProxy,
    @Inject(MICROSERVICE_CLIENTS.BILLING_SERVICE) private readonly billingClient: ClientProxy,
  ) {}

  @Get()
  async getInvoices(
    @Req() req: AuthenticatedRequest,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('status') status?: string,
    @Query('clientId') clientId?: string,
  ) {
    return lastValueFrom(
      this.tenantClient.send(
        { cmd: 'get_invoices' },
        {
          tenantId: req.user!.tenantId,
          page: page || 1,
          limit: limit || 20,
          status,
          clientId,
        },
      ),
    );
  }

  @Post()
  @UseGuards(SubscriptionGuard)
  @ResourceType('invoices')
  async createInvoice(
    @Req() req: AuthenticatedRequest,
    @Body() body: {
      clientId: string;
      invoiceNumber: string;
      issueDate?: Date;
      dueDate: Date;
      items: Array<{
        description: string;
        quantity: number;
        unitPrice: number;
        taxRate?: number;
        amount?: number;
      }>;
      subtotal?: number;
      taxAmount?: number;
      total: number;
      currency?: string;
      notes?: string;
      terms?: string;
      paymentTerms?: number;
    },
  ) {
    const result = await lastValueFrom(
      this.tenantClient.send(
        { cmd: 'create_invoice' },
        {
          tenantId: req.user!.tenantId,
          createdBy: req.user!.sub,
          ...body,
        },
      ),
    );

    // Increment usage
    await lastValueFrom(
      this.billingClient.send(
        { cmd: 'increment_usage' },
        { tenantId: req.user!.tenantId, resourceType: 'invoices' },
      ),
    );

    // Schedule reminders
    if (result.client?.email || result.client?.phone) {
      await lastValueFrom(
        this.reminderClient.send(
          { cmd: 'schedule_reminders' },
          {
            invoiceId: result.id,
            tenantId: req.user!.tenantId,
            clientId: body.clientId,
            clientName: result.client.name,
            clientEmail: result.client.email,
            clientPhone: result.client.phone,
            invoiceNumber: body.invoiceNumber,
            amount: body.total,
            currency: body.currency || 'INR',
            dueDate: body.dueDate,
          },
        ),
      );
    }

    return result;
  }

  @Get(':id')
  async getInvoice(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
  ) {
    return lastValueFrom(
      this.tenantClient.send(
        { cmd: 'get_invoice' },
        {
          tenantId: req.user!.tenantId,
          invoiceId: id,
        },
      ),
    );
  }

  @Put(':id')
  async updateInvoice(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
    @Body() body: {
      clientId?: string;
      dueDate?: Date;
      items?: Array<{
        description: string;
        quantity: number;
        unitPrice: number;
        taxRate?: number;
      }>;
      total?: number;
      notes?: string;
      terms?: string;
    },
  ) {
    return lastValueFrom(
      this.tenantClient.send(
        { cmd: 'update_invoice' },
        {
          tenantId: req.user!.tenantId,
          invoiceId: id,
          ...body,
        },
      ),
    );
  }

  @Delete(':id')
  async deleteInvoice(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
  ) {
    // Cancel any pending reminders
    await lastValueFrom(
      this.reminderClient.send(
        { cmd: 'cancel_reminders' },
        { invoiceId: id },
      ),
    );

    return lastValueFrom(
      this.tenantClient.send(
        { cmd: 'delete_invoice' },
        {
          tenantId: req.user!.tenantId,
          invoiceId: id,
        },
      ),
    );
  }

  @Post(':id/payment-link')
  async createPaymentLink(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
  ) {
    return lastValueFrom(
      this.paymentClient.send(
        { cmd: 'create_payment_link' },
        {
          tenantId: req.user!.tenantId,
          invoiceId: id,
        },
      ),
    );
  }

  @Post(':id/send')
  async sendInvoice(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
    @Body() body: { channels?: ('EMAIL' | 'WHATSAPP')[] },
  ) {
    return lastValueFrom(
      this.tenantClient.send(
        { cmd: 'send_invoice' },
        {
          tenantId: req.user!.tenantId,
          invoiceId: id,
          channels: body.channels,
        },
      ),
    );
  }

  @Post(':id/mark-paid')
  async markAsPaid(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
    @Body() body: {
      paymentMethod: string;
      paymentDate?: Date;
      transactionId?: string;
      notes?: string;
    },
  ) {
    // Cancel any pending reminders first
    await lastValueFrom(
      this.reminderClient.send(
        { cmd: 'cancel_reminders' },
        { invoiceId: id },
      ),
    );

    return lastValueFrom(
      this.tenantClient.send(
        { cmd: 'mark_invoice_paid' },
        {
          tenantId: req.user!.tenantId,
          invoiceId: id,
          ...body,
        },
      ),
    );
  }

  @Get(':id/reminders')
  async getInvoiceReminders(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
  ) {
    return lastValueFrom(
      this.reminderClient.send(
        { cmd: 'get_reminders' },
        {
          tenantId: req.user!.tenantId,
          invoiceId: id,
        },
      ),
    );
  }
}
