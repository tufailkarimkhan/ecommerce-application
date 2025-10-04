import { Injectable } from "@nestjs/common";
import { IUserRepository } from "../interfaces/user.repository.interface";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../schemas/users.schema";
import { Model } from "mongoose";

@Injectable()
export class MongooseUserRepository implements IUserRepository{
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>
    ){}

    async create(user: Partial<User>): Promise<User> {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

    async findById(id: string): Promise<User | null> {
        return this.userModel.findById(id).exec();
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({email}).exec();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async update(id: string, updateData: Partial<User>): Promise<User | null> {
        return this.userModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    }

    async delete(id: string): Promise<User | null> {
        return this.userModel.findByIdAndDelete(id).exec();
    }   
}