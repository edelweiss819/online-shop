'use client';
import React, {useState} from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import {IconButtonSize} from '@/app/shared/ui/IconButton/IconButton.enums';
import IconButtonArrow from '@/app/assets/IconButtonArrow/IconButtonArrow';
import {ButtonFillStyle} from '@/app/shared/ui/Button/Button.enums';

export interface IIconButtonProps {
    text: string;
    size: IconButtonSize;
    fill: ButtonFillStyle;
    onClick?: () => void;
    href?: string;
}

const IconButton: React.FC<IIconButtonProps> = ({
                                                    text,
                                                    size,
                                                    onClick,
                                                    fill,
                                                    href
                                                }) => {
    const [isHoverButton, setIsHoverButton] = useState<boolean>(false);

    const commonButtonClass = 'rounded-[43px] inline-flex items-center justify-center cursor-pointer border-2';
    const buttonFillClass = classnames({
                                           'bg-primary border-primary hover:bg-hard-primary hover:border-hard-primary transition-colors duration-150 ease-in-out': fill === ButtonFillStyle.FILL,
                                           'bg-white border-white hover:bg-white hover:border-hard-primary transition-colors duration-150 ease-in-out': fill === ButtonFillStyle.BORDER,
                                           'bg-green-ghost border-green-ghost hover:bg-green-ghost-hover hover:border-green-ghost-hover transition-colors duration-150 ease-in-out': fill === ButtonFillStyle.GHOST,
                                           'bg-gray-8 border border-gray-8': fill === ButtonFillStyle.SUBSCRIBE
                                       });
    const buttonSizeClass = classnames({
                                           'h-[36px]': size === IconButtonSize.S,
                                           'h-[45px]': size === IconButtonSize.M,
                                           'h-[51px]': size === IconButtonSize.L,
                                       });
    const buttonClass = classnames(commonButtonClass, buttonSizeClass, buttonFillClass);
    const textCommonClass = 'font-semibold leading-heading';
    const textColorClass = classnames({
                                          'text-white': fill === ButtonFillStyle.FILL,
                                          'text-primary': fill === ButtonFillStyle.BORDER && !isHoverButton,
                                          'text-hard-primary': fill === ButtonFillStyle.BORDER && isHoverButton,
                                          'text-primary transition-colors duration-150 ease-in-out': fill === ButtonFillStyle.GHOST,
                                      });

    const textClass = classnames(textCommonClass, {
        'text-body-tiny py-[10px]': size === IconButtonSize.S,
        'text-body-small py-[14px]': size === IconButtonSize.M,
        'text-body-medium py-4': size === IconButtonSize.L,
    }, textColorClass);

    const blockCommonClass = 'inline-flex items-center justify-center gap-3';
    const blockClass = classnames(blockCommonClass, {
        'px-6': size === IconButtonSize.S,
        'px-8 ': size === IconButtonSize.M,
        'px-10': size === IconButtonSize.L,
    });

    const arrowColorClass = classnames({
                                           'text-primary': fill === ButtonFillStyle.BORDER && !isHoverButton,
                                           'text-hard-primary': fill === ButtonFillStyle.BORDER && isHoverButton,
                                       });

    const handleMouseEnterButton = () => setIsHoverButton(true);
    const handleMouseLeaveButton = () => setIsHoverButton(false);

    const buttonContent = (
        <div
            className={buttonClass}
            onClick={onClick}
            onMouseEnter={handleMouseEnterButton}
            onMouseLeave={handleMouseLeaveButton}
        >
            <div className={blockClass}>
                <span className={textClass}>
                    {text}
                </span>
                <IconButtonArrow className={arrowColorClass}/>
            </div>
        </div>
    );

    if (href) {
        return <Link href={href}>{buttonContent}</Link>;
    }

    return buttonContent;
};

export default IconButton;
