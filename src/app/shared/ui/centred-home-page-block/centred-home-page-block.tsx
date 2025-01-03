import React from 'react';
import classnames from 'classnames';

export type CentredHomePageBlockProps = {
    color: string;
    children: React.ReactNode;
}

const CentredHomePageBlock: React.FC<CentredHomePageBlockProps> = ({
                                                                       color = 'white',
                                                                       children
                                                                   }) => {

    const wrapperClass = classnames(`flex flex-col bg-${color}`)
    return (
        <div>
            <div className={wrapperClass}>
                <div className={'max-w-base-width w-full mx-auto'}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CentredHomePageBlock;
