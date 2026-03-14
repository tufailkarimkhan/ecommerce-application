import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt.auth.guard";
import { UserGatewayService } from "./user.gateway.service";
import { get } from "axios";


@UseGuards(JwtAuthGuard)
@Controller('api/users')
export class UserGatewayController {
    constructor(private readonly userGatewayService: UserGatewayService) { }

    @Get('/all')
    getAllUsers() {
        console.log("checking data from controller");
        return this.userGatewayService.getAllUsers();
    }

    @Get('/test')
    test() {
        return { message: 'User Gateway is Working!' };
    }
}