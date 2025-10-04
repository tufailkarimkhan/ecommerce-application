import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/users.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { IUser } from "./interfaces/user.interface";
import { UserModule } from "./users.module";
import type { IUserRepository } from "./interfaces/user.repository.interface";
import { USER_REPOSITORY_TOKEN } from "./interfaces/user.repository.interface";

@Injectable()
export class UsersService{

    constructor(
        @Inject(USER_REPOSITORY_TOKEN)
        private readonly userRepository: IUserRepository,
    ){}

    async create(createUserDto: CreateUserDto): Promise<IUser> {
        return this.userRepository.create(createUserDto);
    }

    async findAll(): Promise<IUser[]> {
        return this.userRepository.findAll();
    }   

    async findbyId(id: string): Promise<IUser | null> {
        return this.userRepository.findById(id);
    }  
    
    async findByEmail(email: string): Promise<IUser | null> {
        return this.userRepository.findByEmail(email);
    }

    async delete(id: string): Promise<IUser | null> {
        return this.userRepository.delete(id);
    }
    
    async update(id: string, createUserDto: CreateUserDto): Promise<IUser | null> {
        return this.userRepository.update(id, createUserDto);
    }   
}