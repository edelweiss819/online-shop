import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import classnames from 'classnames';


interface INavItemsNoChevronProps {
    linkTitle: string
    href: string
}

const NavItemsNoChevron: React.FC<INavItemsNoChevronProps> = ({
                                                                  linkTitle,
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
    return (
        <Link href={href}
              className={'flex justify-center items-center'}>
            <div className="flex flex-row items-center gap-1">
                <span className={textClass}>{linkTitle}</span>
            </div>
        </Link>
    );
};

export default NavItemsNoChevron;
