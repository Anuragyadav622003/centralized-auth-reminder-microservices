import { Injectable, Logger } from '@nestjs/common';
import Twilio from 'twilio'; // default import because Twilio is CommonJS

@Injectable()
export class WhatsAppService {
  private client: ReturnType<typeof Twilio>;
  private readonly logger = new Logger(WhatsAppService.name);

  constructor() {
    this.client = Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
  } 

  async sendWhatsAppMessage(to: string, message: string) {
    await this.client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM,
      to: `whatsapp:${to}`,
      body: message,
    });

    this.logger.log(`📱 WhatsApp sent to ${to}`);
  }
}