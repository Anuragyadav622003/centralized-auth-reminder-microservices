import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { MICROSERVICE_CLIENTS } from '../../app/constants';
import {  ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.AUTH_SERVICE)
    private authClient: ClientProxy
  ) { }
 async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const req = context.switchToHttp().getRequest(); 
    
    const authHeader = req.headers['authorization'];
  
    if (!authHeader) throw new UnauthorizedException("missing token!");
    const result = await firstValueFrom(this.authClient.send('validate.token',{token:authHeader}));
    console.log("auth guard3",result)
    if(!result.isValid) throw new UnauthorizedException('Invalid Token');
    req.user = result.user;
    return true;
  }
}
