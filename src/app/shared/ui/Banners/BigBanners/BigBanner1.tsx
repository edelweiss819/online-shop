import React from 'react';
import Image from 'next/image';
import BannersLabel from '@/app/shared/ui/Label/BannersLabel/BannersLabel';
import IconButton from '@/app/shared/ui/IconButton/IconButton';
import {IconButtonSize} from '@/app/shared/ui/IconButton/IconButton.enums';
import {ButtonFillStyle} from '@/app/shared/ui/Button/Button.enums';

export interface IBigBanner1Props {
    imageAlt: string;
    bannerBackground: number;
    discountSize: number;
}

const BigBanner1: React.FC<IBigBanner1Props> = ({
                                                    imageAlt,
                                                    bannerBackground,
                                                    discountSize,
                                                }) => {
    const imageSrc = `/images/test/BannersBackgrounds/BigBanners/BigBanner_${bannerBackground}.png`;


    return (
        <div className="relative w-full max-w-[872px] h-[600px] rounded-[10px] overflow-hidden">
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority={false}
                className="object-cover"
            />
            <div className="absolute inset-0 bg-big-banner-gradient">
                <div className={'relative top-[155px] left-[60px]'}>
                    <div className={'text-heading-03 font-semibold leading-heading text-white w-[382px]'}>
                        Fresh & Healthy Organic Food
                    </div>
                    <div className={'w-[232px] border-l-2 border-soft-primary mt-7'}>
                        <div className={'ml-3'}>
                            <div className={'w-full flex flex-row gap-2 items-center'}>
                                <div className={'text-body-xl leading-body font-medium text-white'}>
                                    Sale up to
                                </div>
                                <BannersLabel discountSize={discountSize}/>
                            </div>
                            <div className={'mt-2 text-white text-body-small font-normal leading-body'}>
                                Free shipping on all your order.
                            </div>
                        </div>
                    </div>
                    <div className={'mt-7'}>
                        <IconButton text={'Shop now'}
                                    size={IconButtonSize.L}
                                    fill={ButtonFillStyle.BORDER}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigBanner1;
