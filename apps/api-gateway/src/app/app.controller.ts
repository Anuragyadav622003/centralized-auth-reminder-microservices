import { Body, Controller, Inject, Post, Get } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICE_CLIENTS } from './constants';

@Controller('auth')
export class AppController {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.AUTH_SERVICE)
    private readonly authClient: ClientProxy,
  ) {}

  @Get()
  greet() {
    return this.authClient.send('greet',"hello");
  }

  @Post('register')
  register(@Body() body: any) {
    console.log("body",body)
    return this.authClient.send('auth.register', body);
  }

  @Post('login')
  login(@Body() body: any) {
    return this.authClient.send('auth.login', body);
  }
}
