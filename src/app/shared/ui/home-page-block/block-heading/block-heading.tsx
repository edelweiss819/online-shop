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
                <div className={'text-heading-06 font-semibold leading-heading text-gray-9 mb-8 flex flex-row justify-between'}>
                    {title}
                    {navElement}
                </div>
            ) : (
                <div className={'text-heading-06 font-semibold leading-heading text-gray-9 mb-8'}>
                    {title}
                </div>
            )}
        </>
    );
};

export default BlockHeading;
