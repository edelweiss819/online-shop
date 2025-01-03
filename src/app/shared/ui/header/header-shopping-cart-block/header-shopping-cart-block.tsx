import React from 'react';
import AddToWishlistBigIcon
    from '@/app/assets/icons/add-to-wishlist-big-icon/add-to-wishlist-big-icon';
import Divider from '@/app/assets/divider/divider';
import IconWithBadge from '@/app/shared/ui/icon-with-badge/icon-with-badge';

const HeaderShoppingCartBlock: React.FC = () => {
    return (
        <div className={'flex flex-row items-center justify-center cursor-pointer'}>
            <AddToWishlistBigIcon/>
            <div className={'ml-[16.5px]'}>
                <Divider/>
            </div>
            <div className={'ml-[15.5px] cursor-pointer'}>
                <IconWithBadge badgeCount={2}/>
            </div>
            <div className={'ml-3 flex flex-col gap-[7px]'}>
                <span className={'text-gray-7 font-normal text-[11px] leading-heading'}>Shopping cart:</span>
                <span
                    className={'text-gray-9 text-body-small font-medium leading-[100%]'}>$59.99</span>
            </div>

        </div>
    );
};

export default HeaderShoppingCartBlock;
