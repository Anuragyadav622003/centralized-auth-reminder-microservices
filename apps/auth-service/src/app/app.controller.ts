import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {  MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 @MessagePattern('greet')
  getData() {
    console.log("hello")
    return this.appService.getData();
  }
}
