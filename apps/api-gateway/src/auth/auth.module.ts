import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { MicroserviceClientsModule } from "../shared/microservice-clients.module";

import { AuthGuard } from "../guards/auth/auth.guard";
import { RedisModule } from "../shared/redis/redis.module";

@Module({
    imports:[MicroserviceClientsModule,RedisModule],
    controllers:[AuthController],
    providers:[AuthGuard],
    exports:[AuthGuard]
})
export class AuthModule {} 