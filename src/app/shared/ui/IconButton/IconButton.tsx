import React from 'react';
import classnames from 'classnames';
import {IconButtonSize} from '@/app/shared/ui/IconButton/IconButton.enums';
import IconButtonArrow from '@/app/assets/IconButtonArrow/IconButtonArrow';

export interface IIconButtonProps {
    text: string;
    size: IconButtonSize
    onClick?: () => void;
}

const IconButton: React.FC<IIconButtonProps> = ({
                                                    text,
                                                    size,
                                                    onClick
                                                }) => {
    const commonButtonClass = 'rounded-[43px] bg-primary inline-flex items-center justify-center cursor-pointer border-2 border-primary';
    const buttonSizeClass = classnames({
                                           'h-[36px]': size === IconButtonSize.S,
                                           'h-[45px]': size === IconButtonSize.M,
                                           'h-[51px]': size === IconButtonSize.L,
                                       });
    const buttonClass = classnames(commonButtonClass, buttonSizeClass);
    const textCommonClass = 'text-white font-semibold leading-heading';

    const textClass = classnames(textCommonClass, {
        'text-body-tiny py-[10px]': size === IconButtonSize.S,
        'text-body-small py-[14px] ': size === IconButtonSize.M,
        'text-body-medium py-4': size === IconButtonSize.L,
    });

    const blockCommonClass = 'inline-flex items-center justify-center gap-3';
    const blockClass = classnames(blockCommonClass, {
        'px-6': size === IconButtonSize.S,
        'px-8 ': size === IconButtonSize.M,
        'px-10': size === IconButtonSize.L,
    });

    return (
        <div className={buttonClass} onClick={onClick}>
            <div className={blockClass}>
                <span className={textClass}>
                {text}
            </span>
                <IconButtonArrow/>
            </div>
        </div>
    );
};

export default IconButton;
