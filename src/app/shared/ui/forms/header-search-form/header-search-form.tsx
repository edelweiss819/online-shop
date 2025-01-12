'use client';
import React from 'react';
import Button from '@/app/shared/ui/button/button';
import {
    ButtonFillStyle,
    ButtonSize,
    ButtonSpecialModifier
} from '@/app/shared/ui/button/button.enums';
import MagnifyingGlassIcon from '@/app/assets/magnifying-glass-icon/magnifying-glass-icon';

const HeaderSearchForm: React.FC = () => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const handleButtonClick = () => {
        console.log('Search button clicked!');
    }

    return (
        <form className={'flex flex-row gap-0'}>
            <div className={'flex flex-row border-l border-t border-b border-gray-1 rounded-[4px] bg-white h-[51px] w-full relative'}>
                <div className={'absolute top-[15px] left-[16px]'}>
                    <MagnifyingGlassIcon/>
                </div>
                <input
                    type={'search'}
                    placeholder={'Search'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    required
                    className={'flex h-[100%] ml-[42px] w-full min-w-[189px] cursor-pointer focus:outline-none text-[15px] text-gray-5 leading-[21px] font-normal'}/>
                <div className={'-mt-[1px]'}>
                    <Button
                        text={'Search'}
                        size={ButtonSize.SEARCH}
                        fill={ButtonFillStyle.FILL}
                        specialModifier={ButtonSpecialModifier.SEARCH}
                        onClick={handleButtonClick}
                    />
                </div>
            </div>
        </form>
    );
};

export default HeaderSearchForm;
