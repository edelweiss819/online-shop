import React from 'react';
import BlockHeading from '@/app/shared/ui/HomePageBlock/BlockHeading/BlockHeading';

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
