import { Injectable, UnauthorizedException } from "@nestjs/common";

import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import * as bcrypt from 'bcrypt';
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) {}

    async signUp(userData: CreateUserDto): Promise<any> {
        /*before going to create user check if user already exists*/ 
        const existingUser = await this.userService.findByEmail(userData.email);
        if (existingUser) {
            throw new UnauthorizedException("User already exists");
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;
        const user = await this.userService.create(userData);
        // const token = this.jwtService.sign({ id: user.id });
        return { message: 'User registered successfully', user: userData.f_name + ' ' + userData.l_name };
    }

    async login(loginDto: LoginDto) : Promise<any> {
        const user = await this.userService.findByEmail(loginDto.email);            
        if (!user) {
            throw new UnauthorizedException("Invalid email or password");
        }

        const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException("Invalid email or password");
        }
        const payload = { sub: user.id, email: user.email };

        const token = this.jwtService.sign(payload);
        return { message: 'Login successful', token };
    }
}