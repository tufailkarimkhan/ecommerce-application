import { IsNotEmpty,IsEmail,MinLength, isNotEmpty } from "class-validator";

export class CreateUserDto{

    readonly id?: string;

    @IsNotEmpty()
    readonly f_name: string;

    @IsNotEmpty()
    readonly l_name: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly address: string;

    readonly phone?: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    readonly createdAt?: Date;
    readonly updatedAt?: Date;

}