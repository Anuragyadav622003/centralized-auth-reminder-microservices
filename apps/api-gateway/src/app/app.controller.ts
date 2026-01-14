import { Body, Controller, Inject, Post, Get, UseGuards, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AuthGuard } from '../guards/auth/auth.guard';
import { firstValueFrom } from 'rxjs'; 
import { MICROSERVICE_CLIENTS } from './constants';

@Controller('auth')
export class AppController {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.AUTH_SERVICE)
    private readonly authClient: ClientProxy,
  ) { }

  @Get()
  greet() {
    return this.authClient.send('greet', "hello");
  }

  @Post('register')
  register(@Body() body: any) {
    console.log("api-gateway", body)
    return this.authClient.send('auth.register', body);
  }

  @Post('login')
  login(@Body() body: any) {
    return this.authClient.send('auth.login', body);
  }


  @UseGuards(AuthGuard)
  @Get('profile')
  async getUserProfile(@Req() req: any) {
    const userId = req.user.id;
    console.log("hello ")
    return await firstValueFrom(this.authClient.send('user.profile', userId));


  }
}
