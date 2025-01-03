import React from 'react';
import BlockHeading from '@/app/shared/ui/home-page-block/block-heading/block-heading';

export type HomePageBlockProps = {
    title: string;
    children: React.ReactNode;
}

const HomePageBlock: React.FC<HomePageBlockProps> = ({
                                                         title,
                                                         children,
                                                     }) => {
    return (
        <>
            <BlockHeading title={title}/>
            {children}
        </>
    );
};

export default HomePageBlock;
