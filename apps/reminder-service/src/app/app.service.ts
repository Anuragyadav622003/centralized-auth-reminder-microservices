import { Injectable,Logger } from '@nestjs/common';


@Injectable()
export class AppService {
   private readonly logger = new Logger();
  getData() {
   this.logger.debug('Called when the current second is 45');
  }
}
