import React from 'react';
import BlockHeading from '@/app/shared/ui/home-page-block/block-heading/block-heading';

export type HomePageBlockProps = {
    title: string;
    navElement?: React.ReactNode;
    children: React.ReactNode;
}

const HomePageBlock: React.FC<HomePageBlockProps> = ({
                                                         title,
                                                         children,
                                                         navElement,
                                                     }) => {
    return (
        <>
            <BlockHeading title={title}
                          navElement={navElement}/>
            {children}
        </>
    );
};

export default HomePageBlock;
