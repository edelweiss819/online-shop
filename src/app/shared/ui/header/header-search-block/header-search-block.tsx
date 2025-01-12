import React from 'react';
import LogoWithTitle from '@/app/shared/ui/logo-variants/logo-with-title/logo-with-title';
import {TitleColor} from '@/app/shared/ui/logo-variants/logo-with-title/logo-with-title.enums';
import HeaderShoppingCartBlock
    from '@/app/shared/ui/header/header-shopping-cart-block/header-shopping-cart-block';
import HeaderSearchForm from '@/app/shared/ui/forms/header-search-form/header-search-form';

const HeaderSearchBlock: React.FC = () => {
    return (
        <div className={'w-full'}>
            <div className={'bg-white flex justify-center lg:mx-[20px] xl:mx-0'}>
                <div className={'h-[93px] flex flex-row justify-between w-full max-w-base-width'}>
                    <div className={'mt-[27.5px] cursor-pointer'}>
                        <LogoWithTitle titleColor={TitleColor.DARK}/>
                    </div>
                    <div className={'mt-6 max-w-[500px] w-full'}>
                        <HeaderSearchForm/>
                    </div>
                    <div className={'mt-[29.5px]'}>
                        <HeaderShoppingCartBlock/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSearchBlock;
