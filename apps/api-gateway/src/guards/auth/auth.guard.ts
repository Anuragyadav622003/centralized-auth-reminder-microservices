import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { MICROSERVICE_CLIENTS } from '../../shared/constants';
import {  ClientProxy } from '@nestjs/microservices';
import { RedisService } from '../../shared/redis/redis.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private redisService:RedisService,
    @Inject(MICROSERVICE_CLIENTS.AUTH_SERVICE)
    private authClient: ClientProxy
  ) { }
 async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> { 
    const req = context.switchToHttp().getRequest(); 
    
    const authHeader = req.headers['authorization'];
  
    if (!authHeader) throw new UnauthorizedException("missing token!");
        const token = authHeader.split(' ')[1];

    // 1. CHECK CACHE
    const userCached = await this.redisService.getString(`token:${token}`);
    if (userCached) {
      req.user = JSON.parse(userCached); 
      return true;
    }
    const result = await firstValueFrom(this.authClient.send('validate.token',{token:authHeader}));
    if(!result.isValid) throw new UnauthorizedException('Invalid Token');
       await this.redisService.setString(
      `token:${token}`,
      JSON.stringify(result.user),
      900,
    );

    req.user = result.user;
    return true;
  }
}
