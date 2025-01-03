import React from 'react';
import Link from 'next/link';
import IconButtonArrow from '@/app/assets/icon-button-arrow/icon-button-arrow';

export interface ILinkWithArrowProps {
    href: string;
    text: string;
}

const LinkWithArrow: React.FC<ILinkWithArrowProps> = ({
                                                          href,
                                                          text
                                                      }) => {

    const arrowColorClass = 'text-primary';

    return (
        <Link href={href}>
            <div className={'flex flex-row items-center gap-3'}>
                <span className={'text-[16px] font-semibold leading-heading text-primary'}>
                    {text}
                </span>
                <IconButtonArrow className={arrowColorClass}/>
            </div>
        </Link>
    );
};

export default LinkWithArrow;
