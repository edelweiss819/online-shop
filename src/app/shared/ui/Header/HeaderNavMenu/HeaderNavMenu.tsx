'use client'
import React from 'react';
import {NAVIGATION_ITEMS_LIST, NAVIGATION_ITEMS_NO_CHEVRON, PHONE_NUMBER} from '@/app/constants';
import DropDownList from '@/app/shared/ui/Nav/DropDownList/DropDownList';
import NavItemsNoChevron from '@/app/shared/ui/Nav/NavItemsNoChevron/NavItemsNoChevron';
import PhoneRecevierIcon from '@/app/assets/PhoneRecevierIcon/PhoneRecevierIcon';

const HeaderNavMenu: React.FC = () => {


    return (
        <div className="w-full bg-gray-8 py-4">
            <div className="flex justify-center">
                <div className="flex flex-row max-w-base-width w-full justify-between">
                    <div className={'flex flex-row gap-8'}>
                        {NAVIGATION_ITEMS_LIST.map((item, index) => (
                            <DropDownList
                                listTitle={item.title}
                                href={item.href}
                                key={index}
                            />
                        ))}
                        {NAVIGATION_ITEMS_NO_CHEVRON.map((item, index) => (
                            <NavItemsNoChevron linkTitle={item.title}
                                               href={item.href}
                                               key={index}/>
                        ))}
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <PhoneRecevierIcon className={'text-white'}/>
                        <span className={'text-white text-body-small font-medium leading-body'}>{PHONE_NUMBER}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderNavMenu;
