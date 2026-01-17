import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { MicroserviceClientsModule } from "../shared/microservice-clients.module";


@Module({
    imports:[MicroserviceClientsModule],
    controllers:[AuthController]
})
export class AuthModule {}