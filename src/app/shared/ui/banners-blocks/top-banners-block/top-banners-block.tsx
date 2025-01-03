import React from 'react';
import SmallBanner_1 from '@/app/shared/ui/banners/small-banners/small-banner_1';
import SmallBanner_2 from '@/app/shared/ui/banners/small-banners/small-banner_2';
import BigBanner_1 from '@/app/shared/ui/banners/big-banners/big-banner_1';

const TopBannersBlock: React.FC = () => {
    return (
        <div className={'grid grid-cols-[minmax(470px,872px),minmax(423px,423px)] gap-6'}>
            <div className="col-span-1 row-span-2">
                <BigBanner_1
                    bannerBackground={1}
                    imageAlt={'Fresh & Healthy Organic Food'}
                    discountSize={30}
                />
            </div>
            <div className="col-start-2 row-start-1">
                <SmallBanner_1
                    bannerBackground={1}
                    imageAlt={'Summer Sale'}
                    discountSize={75}
                />
            </div>
            <div className="col-start-2 row-start-2">
                <SmallBanner_2
                    bannerBackground={2}
                    imageAlt={'Best Deal'}
                />
            </div>
        </div>
    );
};

export default TopBannersBlock;
