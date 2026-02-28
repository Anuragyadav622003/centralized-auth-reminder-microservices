import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Connect to microservice for TCP communication
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: 4006,
    },
  });

  // Also enable HTTP for webhooks
  const httpPort = process.env.HTTP_PORT || 4006;
  
  await app.startAllMicroservices();
  await app.listen(httpPort);
  
  Logger.log(`🚀 Payment Service (TCP) is running on port 4006`);
  Logger.log(`🚀 Payment Service (HTTP) is running on port ${httpPort}`);
}

bootstrap();
