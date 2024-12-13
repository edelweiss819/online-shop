import React from 'react';

export type BlockHeadingProps = {
    title: string;
}

const BlockHeading: React.FC<BlockHeadingProps> = ({title}) => {
    return (
        <span className={'text-heading-06 font-semibold leading-heading text-gray-9 mb-8'}>
            {title}
        </span>
    );
};

export default BlockHeading;
