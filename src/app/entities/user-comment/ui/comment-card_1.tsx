import React from 'react';
import {UserComment} from '@/app/entities/user-comment/model/user-comment';
import CommentQuotes from '@/app/assets/comment-quotes/comment-quotes';
import Image from 'next/image';
import StarRating from '@/app/features/rating/components/star-rating/star-rating';

export type CommentCard_1Props = {
    userComment: UserComment;
}

const CommentCard_1: React.FC<CommentCard_1Props> = ({userComment}) => {

    const fullUserName = userComment.author.name + ' ' + userComment.author.surname;
    const userNameFirstLetter = userComment.author.name[0].toUpperCase();

    return (
        <div className={'bg-white h-[254px] w-[424px] rounded-lg p-6'}>
            <div>
                <CommentQuotes/>
                <div className={'pt-4 text-body-small font-normal leading-body'}>{userComment.content}</div>
                <div className={'pt-4 flex flex-row justify-between'}>
                    <div className={'flex flex-row gap-3'}>
                        <div className={'w-[56px] h-[56px] rounded-full overflow-hidden'}>
                            {userComment.author.avatarSrc ? (
                                <Image src={userComment.author.avatarSrc}
                                       alt={fullUserName}
                                       width={56}
                                       height={56}
                                       style={{objectFit: 'cover'}}/>
                            ) : (
                                <div className={'bg-red text-white w-[56px] h-[56px] rounded-full flex justify-center items-center text-body-medium '}>
                                    {userNameFirstLetter}
                                </div>
                            )}
                        </div>
                        <div className={'flex flex-col justify-center items-start'}>
                            {userComment.id}
                            <div className={'text-gray-9 text-body-medium font-medium leading-body'}>{fullUserName}</div>
                            <div className={'text-gray-4 text-body-small font-medium leading-body'}>{userComment.author.role}</div>
                        </div>
                    </div>
                    <div className={'flex items-center'}>
                        <StarRating rating={5}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentCard_1;
