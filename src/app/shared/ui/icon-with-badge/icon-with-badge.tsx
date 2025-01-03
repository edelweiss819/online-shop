import React from 'react'
import BagBigIcon from '@/app/assets/icons/bag-big-icon/bag-big-icon';

const IconWithBadge: React.FC<{ badgeCount: number }> = ({badgeCount}) => (
    <div className={'relative'}>
        <div className={'absolute right-0 -top-[2px] rounded-full bg-hard-primary h-[18px] w-[18px] flex items-center justify-center'}>
            <span className={'text-[10px] text-white font-medium leading-[10px] flex'}>{badgeCount}</span>
        </div>
        <BagBigIcon/>
    </div>
);

export default IconWithBadge;