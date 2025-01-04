'use client';

import React, {useState, useRef, useEffect} from 'react';
import CommentCard_1 from '@/app/entities/user-comment/ui/comment-card_1';
import HomePageBlock from '@/app/shared/ui/home-page-block/home-page-block';
import {UserComment} from '@/app/entities/user-comment/model/user-comment';
import NavArrows from '@/app/shared/ui/nav/nav-arrows/nav-arrows';

export type HomePageCommentsBlockProps = {
    comments: UserComment[];
};

const HomePageCommentsBlock: React.FC<HomePageCommentsBlockProps> = ({comments}) => {
    const commentsPerPage = 3;
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>(0);

    useEffect(() => {
        if (sliderRef.current) {
            setContainerWidth(sliderRef.current.offsetWidth);
        }
    }, [comments.length]);

    const handleLeftArrowClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - commentsPerPage);
        }
    };

    const handleRightArrowClick = () => {
        if (currentIndex + commentsPerPage < comments.length) {
            setCurrentIndex(currentIndex + commentsPerPage);
        }
    };

    const sliderWidth = (comments.length / commentsPerPage) * 100
    const sliderShift = (currentIndex / comments.length) * containerWidth;
    return (
        <HomePageBlock
            title={'Client Testimonials'}
            navElement={<NavArrows leftArrowClick={handleLeftArrowClick}
                                   rightArrowClick={handleRightArrowClick}/>}
        >
            <div className="relative overflow-hidden">
                <div
                    ref={sliderRef}
                    className="flex flex-row gap-6 transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${sliderShift}px)`,
                        width: `${sliderWidth}%`,
                    }}
                >
                    {comments.map((comment) => (
                        <CommentCard_1 userComment={comment}
                                       key={comment.id}/>
                    ))}
                </div>
            </div>
        </HomePageBlock>
    );
};

export default HomePageCommentsBlock;
