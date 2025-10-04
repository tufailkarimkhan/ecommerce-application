import { User } from "../schemas/users.schema";

export const USER_REPOSITORY_TOKEN = 'USER_REPOSITORY_TOKEN';

export interface IUserRepository{
    create(user: Partial<User>): Promise<User>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    update(id: string, updateData: Partial<User>): Promise<User | null>;
    delete(id: string): Promise<User | null>;
}