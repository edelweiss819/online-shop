import React from 'react';
import {ArrowButtonSide} from '@/app/shared/ui/arrow-button/arrow-button.enums';
import ArrowLeft from '@/app/assets/arrow-left/arrow-left';
import ArrowRight from '@/app/assets/arrow-right/arrow-right';

export type ArrowButtonProps = {
    className?: string;
    onClick?: () => void;
    side: ArrowButtonSide;
};

const ArrowButton: React.FC<ArrowButtonProps> = ({
                                                     className,
                                                     onClick,
                                                     side,
                                                 }) => {
    return (
        <>
            {side === ArrowButtonSide.Left ? (
                <ArrowLeft className={className}
                           onClick={onClick}/>
            ) : (
                <ArrowRight className={className}
                            onClick={onClick}/>
            )}
        </>
    );
};

export default ArrowButton;