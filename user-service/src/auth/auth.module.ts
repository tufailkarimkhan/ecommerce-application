import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "src/users/users.module";
import { AuthService } from "./auth.service";
import {JwtStrategy} from "./jwt.strategy"
import { AuthController } from "./auth.controller";
import { ConfigModule, ConfigService } from "@nestjs/config";


@Module({  
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
                signOptions: { expiresIn: configService.get<string>('JWT_EXPIRATION') || '3600s' },
            }),
        }),
        UserModule
    ], 
    providers: [AuthService, JwtStrategy], 
    controllers: [AuthController] 
})


export class AuthModule {}