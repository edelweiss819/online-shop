import {User} from '@/app/entities/user/model/user';

export type CommentAuthor = Pick<User, 'id' | 'name' | 'surname' | 'role' | 'avatarSrc'>;

export type UserComment = {
    author: CommentAuthor;
    id: number
    content: string;
    rating: number;
}