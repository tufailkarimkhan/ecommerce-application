import { Controller } from "@nestjs/common";
import { Body, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { LoginDto } from "./dto/login.dto";


@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("signup")
    async signUp(@Body() userData: CreateUserDto): Promise<any> {
        return this.authService.signUp(userData);
    }

    @Post("login")
    async login(@Body() loginDto: LoginDto): Promise<any> {
        return this.authService.login(loginDto);
    }
}