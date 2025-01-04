import React from 'react';
import ArrowButton from '@/app/shared/ui/arrow-button/arrow-button';
import {ArrowButtonSide} from '@/app/shared/ui/arrow-button/arrow-button.enums';

export type NavArrowsProps = {
    leftArrowClick: () => void;
    rightArrowClick: () => void;
}

const NavArrows: React.FC<NavArrowsProps> = ({
                                                 leftArrowClick,
                                                 rightArrowClick
                                             }) => {
    return (
        <div className={'flex flex-row gap-3'}>
            <ArrowButton side={ArrowButtonSide.Left}
                         onClick={leftArrowClick}/>
            <ArrowButton side={ArrowButtonSide.Right}
                         onClick={rightArrowClick}/>
        </div>
    );
};

export default NavArrows;
