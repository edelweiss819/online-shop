import React from 'react';
import Image from 'next/image';
import ButtonWithArrow from '@/app/shared/ui/button-with-arrow/button-with-arrow';
import {ButtonFillStyle} from '@/app/shared/ui/button/button.enums';
import {ButtonWithArrowSize} from '@/app/shared/ui/button-with-arrow/button-with-arrow.enums';

export type MediumBanner3Props = {
    imageAlt: string;
    bannerBackground: number;
    price: number;
};

const MediumBanner_3: React.FC<MediumBanner3Props> = ({
                                                          imageAlt,
                                                          bannerBackground,
                                                          price,
                                                      }) => {

    const imageSrc = `/images/test/BannersBackgrounds/MediumBanners/MediumBanner_${bannerBackground}.png`;

    return (
        <div className={'w-[424px] h-[536px] relative'}>
            <Image src={imageSrc}
                   alt={imageAlt}
                   priority={true}
                   width={424}
                   height={536}
                   className={'rounded-[8px]'}/>
            <div className="absolute top-[35px] w-full flex flex-col items-center">
                <div className="text-body-small font-medium leading-[100%] text-white">
                    85% Fat Free
                </div>
                <div className="mt-4 text-heading-04 font-semibold leading-heading text-white">
                    Low-Fat Meat
                </div>
                <div className="mt-[12.5px] flex flex-row gap-2 justify-center items-center">
                    <div className={'text-body-large font-normal leading-body text-white'}>
                        Low-Fat Meat
                    </div>
                    <div className={'text-body-xl font-semibold leading-body text-warning'}>
                        ${price}
                    </div>
                </div>
                <div className="mt-[28.5px]">
                    <ButtonWithArrow text="Shop Now"
                                     size={ButtonWithArrowSize.M}
                                     fill={ButtonFillStyle.BORDER}/>
                </div>
            </div>
        </div>
    );
};

export default MediumBanner_3;
