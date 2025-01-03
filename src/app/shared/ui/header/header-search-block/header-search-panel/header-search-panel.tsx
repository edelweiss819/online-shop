import React from 'react';
import MagnifyingGlassIcon from '@/app/assets/magnifying-glass-icon/magnifying-glass-icon';
import Button from '@/app/shared/ui/button/button';
import {
    ButtonFillStyle,
    ButtonSize,
    ButtonSpecialModifier
} from '@/app/shared/ui/button/button.enums';

const HeaderSearchPanel: React.FC = () => {
    return (
        <div className="flex flex-row items-center justify-center ">
            <div
                className="flex flex-row w-full max-w-[366px] h-[45px] border-t border-l border-b border-gray-1 pl-4 rounded-tl-[4px] rounded-bl-[4px] cursor-pointer">
                <div
                    className="flex flex-row gap-2 items-center pr-[18px] py-3">
                    <div className={'p-[2.5px]'}>
                        <MagnifyingGlassIcon/>
                    </div>
                    <span
                        className={'text-[15px] text-gray-5 leading-[21px] font-normal'}>Search</span>
                </div>
            </div>
            <Button text={'Search'}
                    size={ButtonSize.M}
                    fill={ButtonFillStyle.FILL}
                    specialModifier={ButtonSpecialModifier.SEARCH}/>
        </div>
    );
};

export default HeaderSearchPanel;
