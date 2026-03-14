import { Module } from "@nestjs/common";
import { UserGatewayController } from "./user.gateway.controller";
import { UserGatewayService } from "./user.gateway.service";


@Module({
    controllers: [UserGatewayController],
    providers: [UserGatewayService],
})
export class UserGatewayModule { }