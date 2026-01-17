import {Controller, Inject, Get} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { MICROSERVICE_CLIENTS } from '../shared/constants';

@Controller('')
export class AppController {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.AUTH_SERVICE)
    private readonly authClient: ClientProxy,
  ) { }

  @Get()
  greet() {
    return this.authClient.send('greet', "hello");
  }
}
