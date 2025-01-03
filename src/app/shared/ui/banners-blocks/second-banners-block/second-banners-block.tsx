import React from 'react';
import MediumBanner_3 from '@/app/shared/ui/banners/medium-banners/medium-banner_3';
import MediumBanner_1 from '@/app/shared/ui/banners/medium-banners/medium-banner_1';
import MediumBanner_2 from '@/app/shared/ui/banners/medium-banners/medium-banner_2';

export type SecondBannersBlockProps = {
    currentTimeFromServer: number;
}

const SecondBannersBlock: React.FC<SecondBannersBlockProps> = ({currentTimeFromServer}) => {
    return (
        <div className={'flex flex-row gap-6'}>
            <MediumBanner_1 imageAlt={'Sale of Month'}
                            bannerBackground={1}
                            currentTimeFromServer={currentTimeFromServer}/>
            <MediumBanner_2 imageAlt={'Summer Sale'}
                            bannerBackground={2}
                            discountSize={64}/>
            <MediumBanner_3 imageAlt={'Low-Fat Meat'}
                            bannerBackground={3}
                            price={79.99}/>
        </div>
    );
};

export default SecondBannersBlock;
