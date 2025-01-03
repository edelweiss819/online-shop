import React from 'react';
import Image from 'next/image';
import LinkWithArrow from '@/app/shared/ui/links/link-with-arrow/link-with-arrow';

export interface ISmallBanner1Props {
    imageAlt: string;
    bannerBackground: number;
    discountSize: number;
}

const SmallBanner_1: React.FC<ISmallBanner1Props> = ({
                                                         bannerBackground,
                                                         imageAlt,
                                                         discountSize,
                                                     }) => {
    const imageSrc = `/images/test/BannersBackgrounds/SmallBanners/SmallBanner_${bannerBackground}.png`;

    return (
        <div className="max-w-[423px] h-[288px] relative">
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={423}
                height={288}
                priority={false}
            />
            <div className="absolute top-[32px] left-[32px]">
                <div className={'text-body-small font-medium leading-[100%] text-gray-9'}>
                    SUMMER SALE
                </div>
                <div className={'text-heading-06 font-semibold leading-heading text-gray-9 mt-2'}>
                    {discountSize}% OFF
                </div>
                <div className={'text-body-small font-normal leading-body text-gray-4 mt-3'}>
                    Only Fruit & Vegetable
                </div>
                <div className={'mt-6'}>
                    <LinkWithArrow href={'/'}
                                   text={'Shop Now'}/>
                </div>
            </div>
        </div>
    );
};

export default SmallBanner_1;
