
export interface IUser{
    id?: string;
    f_name: string;
    l_name: string;
    email: string;
    address: string;
    phone?: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}