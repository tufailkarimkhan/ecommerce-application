import { IsNotEmpty } from "class-validator";


export class ProductDto {
    readonly id?: string;

    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly description: string;

    @IsNotEmpty()
    readonly mfgDate: Date;

    @IsNotEmpty()
    readonly expiryDate: Date;

    @IsNotEmpty()
    readonly quantity: number;

    @IsNotEmpty()
    readonly price: number;

    readonly image_url?: string;

    readonly createdAt?: Date;
    readonly updatedAt?: Date;

}