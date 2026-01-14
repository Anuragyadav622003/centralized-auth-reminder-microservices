
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('auth.register')
  register(@Payload() dto: RegisterDto) {
   console.log('auth-service/register')
    return this.authService.register(dto);
  }

  @MessagePattern('auth.login')
  login(@Payload() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @MessagePattern('user.profile')
  getProfile(@Payload() userId:number){
  
    return this.authService.getProfile(userId);
  }

  @MessagePattern('validate.token')
  validToken(@Payload() payload:any){
    console.log("payload",payload?.token)
    return this.authService.validateToken(payload)
  }
}
