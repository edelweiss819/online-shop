import React from 'react';
import Image from 'next/image';
import ButtonWithArrow from '@/app/shared/ui/button-with-arrow/button-with-arrow';
import {ButtonWithArrowSize} from '@/app/shared/ui/button-with-arrow/button-with-arrow.enums';
import {ButtonFillStyle} from '@/app/shared/ui/button/button.enums';

export type LargeDiscountBanner1Props = {
    imageAlt: string;
    bannerBackground: number;
    discountSize: number;

}

const LargeDiscountBanner_1: React.FC<LargeDiscountBanner1Props> = ({
                                                                        imageAlt,
                                                                        bannerBackground,
                                                                        discountSize
                                                                    }) => {

    const imageSrc = `/images/test/BannersBackgrounds/LargeDiscountBanners/LargeDiscountBanner_${bannerBackground}.png`;

    return (
        <div className="w-[1320px] h-[358px] relative">
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority={false}
            />
            <div className="absolute top-[60px] left-[828px]">
                <div className={'text-body-medium font-medium leading-[100%] text-white'}>
                    Summer Sale
                </div>
                <div className={'mt-3 text-display-02 leading-heading max-w-[225px]'}>
                    <span className={'text-warning font-semibold'}>{discountSize}% </span>
                    <span className={'text-white font-normal'}>OFF</span>
                </div>
                <div className={'mt-4 text-body-medium font-normal leading-body text-gray-2'}>
                    Free on all your order, Free Shipping and 30 days money-back guarantee
                </div>
                <div className={'mt-7'}>
                    <ButtonWithArrow text={'Shop Now'}
                                     size={ButtonWithArrowSize.M}
                                     fill={ButtonFillStyle.FILL}/>
                </div>
            </div>
        </div>
    );
};

export default LargeDiscountBanner_1;
