import React from 'react';
import MediumBanner3 from '@/app/shared/ui/Banners/MediumBanners/MediumBanner3';
import MediumBanner1 from '@/app/shared/ui/Banners/MediumBanners/MediumBanner1';
import MediumBanner2 from '@/app/shared/ui/Banners/MediumBanners/MediumBanner2';

export type SecondBannersBlockProps = {
    currentTimeFromServer: number;
}

const SecondBannersBlock: React.FC<SecondBannersBlockProps> = ({currentTimeFromServer}) => {
    return (
        <div className={'flex flex-row gap-6'}>
            <MediumBanner1 imageAlt={'Sale of Month'}
                           bannerBackground={1}
                           currentTimeFromServer={currentTimeFromServer}/>
            <MediumBanner2 imageAlt={'Summer Sale'}
                           bannerBackground={2}
                           discountSize={64}/>
            <MediumBanner3 imageAlt={'Low-Fat Meat'}
                           bannerBackground={3}
                           price={79.99}/>
        </div>
    );
};

export default SecondBannersBlock;
