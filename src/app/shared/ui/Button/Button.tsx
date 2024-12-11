import React from 'react';
import {
    ButtonFillStyle,
    ButtonSize,
    ButtonSpecialModifier
} from '@/app/shared/ui/Button/Button.enums';
import classnames from 'classnames';


export interface IButton {
    text: string;
    size: ButtonSize;
    fill: ButtonFillStyle;
    specialModifier?: ButtonSpecialModifier;
    onClick?: () => void;
}

const Button: React.FC<IButton> = ({
                                       text,
                                       size,
                                       fill,
                                       specialModifier,
                                       onClick
                                   }) => {
    const buttonCommonClass = 'inline-flex items-center justify-center rounded-[43px] cursor-pointer border-2';
    const buttonSpecialModifierClass = classnames({
                                                      'rounded-tl-[0px] rounded-bl-[0px] rounded-tr-[4px] rounded-br-[4px]': specialModifier === ButtonSpecialModifier.SEARCH,
                                                      'rounded-[43px] h-[50px]': specialModifier === ButtonSpecialModifier.SUBSCRIBE,
                                                  });

    const buttonHeightClass = classnames({
                                             'h-9': size === ButtonSize.S,
                                             'h-[45px]': size === ButtonSize.M,
                                             'h-[51px]': size === ButtonSize.L,

                                         });
    const buttonTextCommonClass = 'font-semibold leading-130';
    const buttonFillClass = classnames({
                                           'bg-primary border-primary hover:bg-hard-primary hover:border-hard-primary transition-colors duration-150 ease-in-out': fill === ButtonFillStyle.FILL,
                                           'bg-white border-primary hover:bg-white hover:border-hard-primary transition-colors duration-150 ease-in-out': fill === ButtonFillStyle.BORDER,
                                           'bg-green-ghost border-green-ghost hover:bg-green-ghost-hover hover:border-green-ghost-hover transition-colors duration-150 ease-in-out': fill === ButtonFillStyle.GHOST,
                                           'bg-gray-8 border border-gray-8': fill === ButtonFillStyle.SUBSCRIBE
                                       });

    const buttonTextClass = classnames({
                                           'px-6 py-[10px] text-body-tiny': size === ButtonSize.S,
                                           'px-8 py-[14px] text-body-small': size === ButtonSize.M,
                                           'px-10 py-4 text-body-large': size === ButtonSize.L,
                                           'text-white': fill === ButtonFillStyle.FILL,
                                           'text-primary hover:text-hard-primary transition-colors duration-150 ease-in-out': fill === ButtonFillStyle.BORDER,
                                           'hover:text-hard-primary text-primary transition-colors duration-150 ease-in-out': fill === ButtonFillStyle.GHOST,
                                       });
    const textSpecialModifierClass = classnames({
                                                    'px-6 py-[14px]': ButtonSpecialModifier.SEARCH,
                                                    'text-white text-[16px] font-semibold leading-[20px] py-[16px] px-[40px]': ButtonSpecialModifier.SUBSCRIBE
                                                }
    )
    const buttonClass = classnames(buttonCommonClass, buttonHeightClass, buttonFillClass, buttonSpecialModifierClass);
    const textClass = classnames(buttonTextCommonClass, buttonTextClass, textSpecialModifierClass)

    return (
        <div className={buttonClass}
             onClick={onClick}>
            <span className={textClass}>{text}</span>
        </div>
    );
};

export default Button;
