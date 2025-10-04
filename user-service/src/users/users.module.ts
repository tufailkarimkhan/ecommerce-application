import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema, User } from "./schemas/users.schema";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { IUserRepository, USER_REPOSITORY_TOKEN } from "./interfaces/user.repository.interface";
import { MongooseUserRepository } from "./repositories/mongoose-user.repository";

@Module({

    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
    ],
    providers: [
        UsersService,
        {
            provide: USER_REPOSITORY_TOKEN,
            useClass: MongooseUserRepository, // Assuming MongooseUserRepository is implemented
        }
    ],
    controllers: [UsersController], // Assuming you have a UsersController to handle routes
})

export class UserModule { }