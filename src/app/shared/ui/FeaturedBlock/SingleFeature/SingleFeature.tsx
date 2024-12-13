import React from 'react';
import {SingleFeatureIcon} from '@/app/shared/ui/FeaturedBlock/SingleFeature/SingleFeature.enums';
import DeliveryTruck from '@/app/assets/icons/Features/DeliveryTruck';
import Headphones from '@/app/assets/icons/Features/Headphones';
import Package from '@/app/assets/icons/Features/Package';
import ShoppingBag from '@/app/assets/icons/Features/ShoppingBag';

export type FeaturedBlockProps = {
    icon: SingleFeatureIcon;
    title: string;
    description: string;
}

const SingleFeature: React.FC<FeaturedBlockProps> = ({
                                                         icon,
                                                         title,
                                                         description
                                                     }) => {

    const renderIcon = () => {
        switch (icon) {
            case SingleFeatureIcon.DeliveryTruck:
                return <DeliveryTruck className={'text-primary'}/>;
            case SingleFeatureIcon.Headphones:
                return <Headphones className={'text-primary'}/>;
            case SingleFeatureIcon.Package:
                return <Package className={'text-primary'}/>;
            case SingleFeatureIcon.ShoppingBag:
                return <ShoppingBag className={'text-primary'}/>;
            default:
                return null;
        }
    };

    return (
        <div className={'flex flex-row gap-4 items-center  w-full max-w-[306px]'}>
            <div>{renderIcon()}</div>
            <div className={'flex flex-col gap-2 justify-center w-full max-w-[250px]'}>
                <span className={'text-body-medium font-semibold leading-heading text-gray-9'}>{title}</span>
                <span className={'text-body-small font-normal leading-body text-gray-4'}>{description}</span>
            </div>
        </div>
    );
};

export default SingleFeature;