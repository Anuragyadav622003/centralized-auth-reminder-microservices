import { Controller, Get, Inject, Req, UseGuards ,Body,Post} from '@nestjs/common';
import { AuthGuard } from '../guards/auth/auth.guard';
import { MICROSERVICE_CLIENTS } from '../shared/constants';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { RateLimit } from '../guards/rate-limit.decorator';


@Controller('auth')
export class AuthController {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.AUTH_SERVICE)
    private readonly authClient: ClientProxy,
  ) {}

  // Simple greet endpoint
  @Get()
  async greet() {
    return await firstValueFrom(this.authClient.send('greet', 'hello'));
  }

  // Register endpoint (forward raw body)
  @Post('register')
  async register(@Body() body: any) {
    console.log('[API-GATEWAY] Register Payload:', body);
    return await firstValueFrom(this.authClient.send('auth.register', body));
  }

  // Login endpoint (forward raw body)
 @RateLimit(3,60,20)
  @Post('login')
  async login(@Body() body: any) {
    console.log('[API-GATEWAY] Login Payload:', body);
    return await firstValueFrom(this.authClient.send('auth.login', body));
  }

  // Profile endpoint, protected with AuthGuard
  @RateLimit(3,60,20)
  @UseGuards(AuthGuard) 
  @Get('profile')
  async getUserProfile(@Req() req: any) {
    const userId = req.user?.id;
    if (!userId) throw new Error('User ID not found in request');

    console.log('[API-GATEWAY] Fetching profile for user ID:', userId);
    return await firstValueFrom(this.authClient.send('auth.getProfile', { id: userId }));
  }
}