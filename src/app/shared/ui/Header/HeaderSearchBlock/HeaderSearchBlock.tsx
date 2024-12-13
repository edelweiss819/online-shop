import React from 'react';
import LogoWithTitle from '@/app/shared/ui/LogoVariants/LogoWithTitle/LogoWithTitle';
import {TitleColor} from '@/app/shared/ui/LogoVariants/LogoWithTitle/LogoWithTitle.enums';
import HeaderSearchPanel
    from '@/app/shared/ui/Header/HeaderSearchBlock/HeaderSearchPanel/HeaderSearchPanel';
import HeaderShoppingCartBlock
    from '@/app/shared/ui/Header/HeaderShoppingCartBlock/HeaderShoppingCartBlock';

const HeaderSearchBlock: React.FC = () => {
    return (
        <div className={'w-full'}>
            <div className={'bg-white flex justify-center'}>
                <div className={'h-[93px] flex flex-row justify-between w-full max-w-base-width'}>
                    <div className={'mt-[27.5px] cursor-pointer'}>
                        <LogoWithTitle titleColor={TitleColor.DARK}/>
                    </div>
                    <div className={'mt-6 max-w-[500px] w-full'}>
                        <HeaderSearchPanel/>
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
