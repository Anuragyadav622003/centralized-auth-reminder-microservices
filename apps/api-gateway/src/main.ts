import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Trust reverse proxy (IMPORTANT for request.ip)
  app.getHttpAdapter().getInstance().set('trust proxy', 1);

  // ✅ Security headers
  app.use(helmet());

  // ✅ Enable CORS if needed
  app.enableCors({
    origin: true,
    credentials: true,
  });

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const port = process.env.PORT || 3000;

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();