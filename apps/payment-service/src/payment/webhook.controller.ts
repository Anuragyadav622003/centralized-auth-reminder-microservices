import { Controller, Post, Body, Headers, HttpCode, Logger } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhooks')
export class WebhookController {
  private readonly logger = new Logger(WebhookController.name);

  constructor(private readonly webhookService: WebhookService) {}

  @Post('razorpay')
  @HttpCode(200)
  async handleRazorpayWebhook(
    @Body() payload: any,
    @Headers('x-razorpay-signature') signature: string,
  ): Promise<{ status: string }> {
    this.logger.log(`Received Razorpay webhook: ${payload.event}`);

    try {
      await this.webhookService.processRazorpayWebhook(payload, signature);
      return { status: 'success' };
    } catch (error) {
      this.logger.error('Failed to process webhook:', error);
      // Still return 200 to prevent Razorpay from retrying
      return { status: 'error' };
    }
  }
}
