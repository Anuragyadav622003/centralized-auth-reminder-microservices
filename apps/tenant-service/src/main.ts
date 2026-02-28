

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport:Transport.TCP,
      options:{
        port:4004
      }
    }
  );

  await app.listen();
  Logger.log(
    `🚀 Auth Service is running on 4001`
  );
}
bootstrap();
