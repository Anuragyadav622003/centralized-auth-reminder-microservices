import { Controller, Get, Inject, Req, UseGuards ,Body,Post} from '@nestjs/common';
import { AuthGuard } from '../guards/auth/auth.guard';
import { MICROSERVICE_CLIENTS } from '../shared/constants';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';


@Controller('auth')
export class AuthController {
 
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