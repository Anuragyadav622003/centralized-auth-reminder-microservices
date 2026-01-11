import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICE_CLIENTS } from '../app/constants';

@Injectable()
export class AuthService {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.AUTH_SERVICE)
    private readonly authClient: ClientProxy, // TCP client
  ) {}

  register(data: any) {
    return this.authClient.send('auth.register', data); // TCP call to microservice
  }

  login(data: any) {
    return this.authClient.send('auth.login', data); // TCP call to microservice
  }
}
