import React from 'react';
import Image from 'next/image';
import ButtonWithArrow from '@/app/shared/ui/button-with-arrow/button-with-arrow';
import {ButtonWithArrowSize} from '@/app/shared/ui/button-with-arrow/button-with-arrow.enums';
import {ButtonFillStyle} from '@/app/shared/ui/button/button.enums';

export type MediumBanner2Props = {
    imageAlt: string;
    bannerBackground: number;
    discountSize: number;
};
const MediumBanner_2: React.FC<MediumBanner2Props> = ({
                                                          imageAlt,
                                                          bannerBackground,
                                                          discountSize,
                                                      }) => {
    const imageSrc = `/images/test/banners-backgrounds/medium-banners/medium-banner_${bannerBackground}.png`;

    return (
        <div className={'w-[424px] h-[536px] relative'}>
            <Image src={imageSrc}
                   alt={imageAlt}
                   priority={true}
                   width={424}
                   height={536}/>
            <div className="absolute top-[35px] w-full flex flex-col items-center">
                <div className="text-body-small font-medium leading-[100%] text-gray-9">
                    SUMMER SALE
                </div>
                <div className="mt-4 text-heading-04 font-semibold leading-heading text-gray-9">
                    100% Fresh Fruit
                </div>
                <div className="mt-2 flex flex-row gap-3 items-center">
                    <div className={'text-body-large font-normal leading-body text-gray-9'}>Up
                        to
                    </div>
                    <div className={'bg-gray-9 rounded-[5px]'}>
                        <div className={'text-body-large font-semibold leading-body px-3 py-[6px] text-yellow'}>{discountSize}%
                            OFF
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <ButtonWithArrow text="Shop Now"
                                     size={ButtonWithArrowSize.M}
                                     fill={ButtonFillStyle.BORDER}/>
                </div>
            </div>
        </div>
    );
};

export default MediumBanner_2;
