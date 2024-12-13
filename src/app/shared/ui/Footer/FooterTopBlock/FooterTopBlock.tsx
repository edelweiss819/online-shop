import React from 'react';
import LogoWithTitle from '@/app/shared/ui/LogoVariants/LogoWithTitle/LogoWithTitle';
import {TitleColor} from '@/app/shared/ui/LogoVariants/LogoWithTitle/LogoWithTitle.enums';
import Button from '@/app/shared/ui/Button/Button';
import {
    ButtonFillStyle,
    ButtonSize,
    ButtonSpecialModifier
} from '@/app/shared/ui/Button/Button.enums';

const FooterTopBlock: React.FC = () => {
    return (
        <div className={'w-full bg-gray-0.5 h-[162px]'}>
            <div className={'flex justify-center'}>
                <div className={'flex flex-row w-full max-w-base-width gap-[114px]'}>
                    <div className={'py-[65px]'}>
                        <LogoWithTitle titleColor={TitleColor.DARK}/>
                    </div>
                    <div className={'flex flex-row gap-[60px] h-full w-full'}>
                        <div className={'flex flex-col gap-1 w-[448px]'}>
                            <span className={'text-gray-9 text-body-xxl font-medium leading-body mt-[50.5px]'}>
                                Subscribe our Newsletter
                            </span>
                            <span className={'text-gray-4 text-body-small font-medium leading-body'}>
                                Pellentesque eu nibh eget mauris congue mattis matti.
                            </span>
                        </div>
                        <div className={'mt-[55.5px] flex flex-row flex-1 max-w-[518px]'}>
                            <div className={'flex flex-row border border-gray-1 rounded-[46px] bg-white h-[52px] w-full'}>
                                <span className={'flex text-body-medium leading-body font-normal text-gray-5 my-[14px] mx-6 h-[24px] w-full'}>
                                    Your email address
                                </span>
                                <Button
                                    text={'Subscribe'}
                                    size={ButtonSize.M}
                                    fill={ButtonFillStyle.SUBSCRIBE}
                                    specialModifier={ButtonSpecialModifier.SUBSCRIBE}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTopBlock;
