import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true})

export class User extends Document {

    @Prop({ required: true })
    f_name: string;

    @Prop({ required: true })
    l_name: string;

    @Prop({ required: true, unique: true })
    email: string; 

    @Prop({required: true})
    address: string;

    @Prop()
    phone: string;

    @Prop({ required: true })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);