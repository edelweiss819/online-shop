import React from 'react';
import Image from 'next/image';
import LinkWithArrow from '@/app/shared/ui/links/link-with-arrow/link-with-arrow';

export interface ISmallBanner2Props {
    imageAlt: string;
    bannerBackground: number;
}

const SmallBanner_2: React.FC<ISmallBanner2Props> = ({
                                                         imageAlt,
                                                         bannerBackground,
                                                     }) => {
    const imageSrc = `/images/test/BannersBackgrounds/SmallBanners/SmallBanner_${bannerBackground}.png`;

    return (
        <div className="max-w-[423px] w-full h-[288px] relative rounded-[16px] overflow-hidden">
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={423}
                height={288}
                priority={false}
            />
            <div className="absolute inset-0 flex flex-col items-center text-white">
                <div className={'w-[343px] flex flex-col items-center text-center'}>
                    <div className="text-body-small font-medium leading-[100%] mt-[67px]">
                        BEST DEAL
                    </div>
                    <div className="text-heading-06 font-semibold leading-heading mt-3">
                        Special Products Deal of the Month
                    </div>
                    <div className={'mt-8'}>
                        <LinkWithArrow href={'/'}
                                       text={'Shop Now'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallBanner_2;
