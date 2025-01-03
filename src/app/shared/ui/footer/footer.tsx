import React from 'react';
import FooterTopBlock from '@/app/shared/ui/footer/footer-top-block/footer-top-block';
import FooterMainBlock from '@/app/shared/ui/footer/footer-main-block/footer-main-block';
import FooterLowerBlock from '@/app/shared/ui/footer/footer-lower-block/footer-lower-block';

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
