'use client';

import React from 'react';
import ChevronDown from '@/app/assets/ChevronDown/ChevronDown';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import classnames from 'classnames';

export interface IDropDownListProps {
    listTitle: string;
    href: string;
}

const DropDownList: React.FC<IDropDownListProps> = ({
                                                        listTitle,
                                                        href
                                                    }) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    const textClass = classnames(
        'text-body-small font-medium leading-body',
        {
            'text-gray-4': !isActive,
            'text-white': isActive,
        }
    );

    const chevronClass = classnames({
                                        'text-gray-4': !isActive,
                                        'text-white': isActive
                                    })

    return (
        <Link href={href}
              className={'flex justify-center items-center'}>
            <div className="flex flex-row items-center gap-1">
                <span className={textClass}>{listTitle}</span>
                <ChevronDown className={chevronClass}/>
            </div>
        </Link>
    );
};

export default DropDownList;
