import React from 'react';
import FooterInfoBlock
    from '@/app/shared/ui/footer/footer-main-block/footer-info-block/footer-info-block';
import {
    InfoBlockType
} from '@/app/shared/ui/footer/footer-main-block/footer-info-block/footer-info-block.enums';
import classnames from 'classnames';
import Link from 'next/link';

export interface IFooterNavLink {
    title: string;
    href: string;
}

export interface IFooterNavListBlockProps {
    blockTitle: string;
    linksArray: IFooterNavLink[];
}


const FooterNavListBlock: React.FC<IFooterNavListBlockProps> = ({
                                                                    blockTitle,
                                                                    linksArray
                                                                }) => {

    const linkClass = classnames('text-body-small font-normal leading-body text-gray-5 hover:text-white cursor-pointer')
    return (
        <FooterInfoBlock blockTitle={blockTitle}
                         blockType={InfoBlockType.LIST_BLOCK}>
            <div className={'flex flex-col gap-3'}>
                {linksArray.map((link, index) => (
                    <Link key={index}
                          className={linkClass}
                          href={link.href}>
                        {link.title}
                    </Link>
                ))}
            </div>

        </FooterInfoBlock>
    );
};

export default FooterNavListBlock;
