import React from 'react';
import MapPin from '@/app/assets/MapPin/MapPin';
import {LOCATION_ADDRESS} from '@/app/constants';
import ChevronDown from '@/app/assets/ChevronDown/ChevronDown';

const HeaderTopMenu: React.FC = ({}) => {
    const dropDownItemsStyle = 'flex flex-row gap-[6px] items-center justify-center cursor-pointer text-gray-6 text-body-tiny font-normal leading-130';

    //TODO Вынести дрподаун шеврон в отдельный компонент
    return (
        <div className="w-full border borde-gray-1 ">
            <div className={'bg-white flex justify-center'}>
                <div className={'flex flex-row justify-between w-full max-w-base-width py-3'}>
                    <div className={'flex flex-row gap-2 items-center'}>
                        <div>
                            <MapPin/>
                        </div>
                        <div className={'text-body-tiny leading-130 font-normal text-gray-6'}>
                            Store Location: {LOCATION_ADDRESS}
                        </div>
                    </div>
                    <div className={'flex flex-row gap-5'}>
                        <div className={dropDownItemsStyle}>
                            Eng
                            <ChevronDown/>
                        </div>
                        <div className={dropDownItemsStyle}>
                            USD
                            <ChevronDown/>
                        </div>
                        <div className={'-mt-[2px] h-[15px] text-gray-1'}>
                            |
                        </div>
                        <div className={dropDownItemsStyle}>
                            Sign In / Sign Up
                            <ChevronDown/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeaderTopMenu;
