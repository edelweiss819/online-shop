import React from 'react';

export type BlockHeadingProps = {
    title: string;
    navElement?: React.ReactNode;
}

const BlockHeading: React.FC<BlockHeadingProps> = ({
                                                       title,
                                                       navElement
                                                   }) => {
    return (
        <>
            {navElement ? (
                <div className={'text-heading-06 font-semibold leading-heading text-gray-9 mb-8 flex flex-row justify-between xl:mx-0 lg:mx-[20px] '}>
                    {title}
                    {navElement}
                </div>
            ) : (
                <div className={'text-heading-06 font-semibold leading-heading text-gray-9 mb-8 xl:ml-0 lg:ml-[20px]'}>
                    {title}
                </div>
            )}
        </>
    );
};

export default BlockHeading;
