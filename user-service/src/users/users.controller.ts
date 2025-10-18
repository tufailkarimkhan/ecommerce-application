import { Body, Controller, Delete, Get, Injectable, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { IUser } from "./interfaces/user.interface";
import { AuthGuard } from "@nestjs/passport";
import { get } from "http";
@Controller('users')
export class UsersController{
    constructor(private readonly userService: UsersService){}

    @Post()
    createUser(@Body() createUserDto: CreateUserDto):Promise<IUser>{
        return this.userService.create(createUserDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get("GetAll")
    getAllUsers():Promise<IUser[]>{
        return this.userService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id') id: string):Promise<IUser | null>{
        return this.userService.findbyId(id);
    }

    @Get('/email')
    getUserByEmail(@Query('email') email: string):Promise<IUser | null>{
        return this.userService.findByEmail(email);
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: CreateUserDto):Promise<IUser | null>{
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string):Promise<IUser | null>{
        return this.userService.delete(id);
    }
}