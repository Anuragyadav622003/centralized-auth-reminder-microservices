import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'health' })
  getHealth(): { status: string; service: string } {
    return { status: 'up', service: 'auth-service' };
  }
}
