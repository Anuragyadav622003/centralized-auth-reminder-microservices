import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongoDBService } from '../shared/mongodb.service';

@Module({
  imports: [ConfigModule],
  controllers: [AppController],
  providers: [AppService,MongoDBService],
})
export class AppModule {}
