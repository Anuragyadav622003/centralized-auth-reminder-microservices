import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;
  private readonly logger = new Logger(EmailService.name);

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendReminderEmail(to: string, subject: string, message: string) {
    await this.transporter.sendMail({
      from: `"PayPulse" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: `
        <h3>Payment Reminder</h3>
        <p>${message}</p>
        <br />
        <p>— PayPulse</p>
      `,
    });

    this.logger.log(`📧 Email sent to ${to}`);
  }
}
