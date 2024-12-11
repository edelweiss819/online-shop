import React from 'react';

import HeaderTopMenu from '@/app/shared/ui/Header/HeaderTopMenu/HeaderTopMenu';
import HeaderSearchBlock from '@/app/shared/ui/Header/HeaderSearchBlock/HeaderSearchBlock';
import HeaderNavMenu from '@/app/shared/ui/Header/HeaderNavMenu/HeaderNavMenu';


const Header: React.FC = () => {
    return (
        <>
            <HeaderTopMenu/>
            <HeaderSearchBlock/>
            <HeaderNavMenu/>
        </>

    )
};

export default Header;
