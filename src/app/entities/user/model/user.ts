import {IProduct} from '@/app/entities/product/model/product';

export enum UserRole {
    Admin = 'Admin',
    Customer = 'Customer',
    Moderator = 'Moderator',
}

export type User = {
    id: string;
    name: string;
    surname: string;
    email: string;
    role: UserRole;
    avatarSrc?: string;
    wishlist?: IProduct[];
}