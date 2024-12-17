import React from 'react';
import SingleFeature from '@/app/shared/ui/FeaturedBlock/SingleFeature/SingleFeature';
import {SingleFeatureIcon} from '@/app/shared/ui/FeaturedBlock/SingleFeature/SingleFeature.enums';

const FeaturedBlock: React.FC = () => {
    return (
        <div className={'flex flex-row gap-[5.3px] w-full max-w-base-width items-center justify-center py-10 px-10 rounded-[8px] shadow-feature-shadow'}>
            <SingleFeature icon={SingleFeatureIcon.DeliveryTruck}
                           title={'Free Shipping'}
                           description={'Free shipping on all your order'}/>
            <SingleFeature icon={SingleFeatureIcon.Headphones}
                           title={'Customer Support 24/7'}
                           description={'Instant access to Support'}/>
            <SingleFeature icon={SingleFeatureIcon.ShoppingBag}
                           title={'100% Secure Payment'}
                           description={'We ensure your money is save'}/>
            <SingleFeature icon={SingleFeatureIcon.Package}
                           title={'Money-Back Guarantee'}
                           description={'30 Days Money-Back Guarantee'}/>
        </div>
    );
};

export default FeaturedBlock;
