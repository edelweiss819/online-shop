import React from 'react';

import HeaderTopMenu from '@/app/shared/ui/header/header-top-menu/header-top-menu';
import HeaderSearchBlock from '@/app/shared/ui/header/header-search-block/header-search-block';
import HeaderNavMenu from '@/app/shared/ui/header/header-nav-menu/header-nav-menu';


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
