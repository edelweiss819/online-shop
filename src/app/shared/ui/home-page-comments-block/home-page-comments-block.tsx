'use client';

import React, {useState, useEffect} from 'react';
import CommentCard_1 from '@/app/entities/user-comment/ui/comment-card_1';
import HomePageBlock from '@/app/shared/ui/home-page-block/home-page-block';
import {UserComment} from '@/app/entities/user-comment/model/user-comment';
import NavArrows from '@/app/shared/ui/nav/nav-arrows/nav-arrows';

export type HomePageCommentsBlockProps = {
    comments: UserComment[];
    commentsPerPage: number;
};

const HomePageCommentsBlock: React.FC<HomePageCommentsBlockProps> = ({
                                                                         comments,
                                                                         commentsPerPage
                                                                     }) => {

    const [iterationCount, setIterationCount] = useState<number>(1);
    const [startIndex, setStartIndex] = useState<number>(0);
    const [endIndex, setEndIndex] = useState<number>(commentsPerPage);
    const totalIterations = Math.ceil(comments.length / commentsPerPage);
    const initialVisibleCommentArray = comments.slice(startIndex, endIndex);
    const [visibleCommentsArray, setVisibleCommentsArray] = useState<UserComment[]>(initialVisibleCommentArray);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const visibleComments = comments.slice(startIndex, endIndex);
        setVisibleCommentsArray(visibleComments);
    }, [
                  startIndex,
                  endIndex,
                  comments
              ]);

    const handleLeftArrowClick = () => {
        if (iterationCount > 1) {
            setIsVisible(false);
            setTimeout(() => {
                setIterationCount(prevIteration => prevIteration - 1);
                setStartIndex(prevState => prevState - commentsPerPage);
                setEndIndex(prevState => prevState - commentsPerPage);
                setIsVisible(true);
            }, 300);
        }
    };

    const handleRightArrowClick = () => {
        if (iterationCount < totalIterations) {
            setIsVisible(false);
            setTimeout(() => {
                setIterationCount(prevIteration => prevIteration + 1);
                setStartIndex(prevState => prevState + commentsPerPage);
                setEndIndex(prevState => prevState + commentsPerPage);
                setIsVisible(true);
            }, 300);
        }
    };

    const maxCommentWidthCalc = 100 / commentsPerPage;

    return (
        <HomePageBlock
            title={'Client Testimonials'}
            navElement={<NavArrows leftArrowClick={handleLeftArrowClick}
                                   rightArrowClick={handleRightArrowClick}/>}
        >
            <div className="overflow-hidden relative">
                <div
                    className={`flex flex-row gap-4 lg:mx-[20px] xl:mx-0 transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                    {visibleCommentsArray.map((comment, id) => (
                        <div
                            style={{maxWidth: `${maxCommentWidthCalc}%`}}
                            key={id}
                        >
                            <CommentCard_1 userComment={comment}/>
                        </div>
                    ))}
                </div>
            </div>
        </HomePageBlock>
    );
};

export default HomePageCommentsBlock;
