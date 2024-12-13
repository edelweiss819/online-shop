import React from 'react';
import SmallBanner1 from '@/app/shared/ui/Banners/SmallBanners/SmallBanner1';
import SmallBanner2 from '@/app/shared/ui/Banners/SmallBanners/SmallBanner2';
import BigBanner1 from '@/app/shared/ui/Banners/BigBanners/BigBanner1';

const TopBannersBlock: React.FC = () => {
    return (
        <div className={'grid grid-cols-[minmax(470px,872px),minmax(423px,423px)] gap-6'}>
            <div className="col-span-1 row-span-2">
                <BigBanner1
                    bannerBackground={1}
                    imageAlt={'Fresh & Healthy Organic Food'}
                    discountSize={30}
                />
            </div>
            <div className="col-start-2 row-start-1">
                <SmallBanner1
                    bannerBackground={1}
                    imageAlt={'Summer Sale'}
                    discountSize={75}
                />
            </div>
            <div className="col-start-2 row-start-2">
                <SmallBanner2
                    bannerBackground={2}
                    imageAlt={'Best Deal'}
                />
            </div>
        </div>
    );
};

export default TopBannersBlock;
