import React from 'react';

export type BlockHeadingProps = {
    title: string;
}

const BlockHeading: React.FC<BlockHeadingProps> = ({title}) => {
    return (
        <div className={'text-heading-06 font-semibold leading-heading text-gray-9 mb-8'}>
            {title}
        </div>
    );
};

export default BlockHeading;
