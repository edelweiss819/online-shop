import React from 'react';
import FooterMainBlock from '@/app/shared/ui/Footer/FooterMainBlock/FooterMainBlock';
import FooterTopBlock from '@/app/shared/ui/Footer/FooterTopBlock/FooterTopBlock';
import FooterLowerBlock from '@/app/shared/ui/Footer/FooterLowerBlock/FooterLowerBlock';

const Footer: React.FC = () => {
    return (
        <>
            <FooterTopBlock/>
            <FooterMainBlock/>
            <FooterLowerBlock/>
        </>

    );
};

export default Footer;
