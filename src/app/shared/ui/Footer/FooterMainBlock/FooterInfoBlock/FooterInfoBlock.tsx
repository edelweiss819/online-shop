import React, {ReactNode} from 'react';
import {
    InfoBlockType
} from '@/app/shared/ui/Footer/FooterMainBlock/FooterInfoBlock/FooterInfoBlock.enums';
import classnames from 'classnames';

export interface IFooterInfoBlockProps {
    blockTitle: string;
    blockType: InfoBlockType;
    children?: ReactNode;
}

const FooterInfoBlock: React.FC<IFooterInfoBlockProps> = ({
                                                              blockTitle,
                                                              blockType,
                                                              children
                                                          }) => {

    const infoBlockClass = classnames('flex flex-col', {
        'gap-4': blockType === InfoBlockType.CONTACT_BLOCK,
        'gap-5': blockType === InfoBlockType.LIST_BLOCK
    })
    const childrenBlockClass = classnames('max-w-[336px]')


    return (
        <div className={infoBlockClass}>
            <span className={'text-body-xl leading-body font-medium text-white h-[30px]'}>
                {blockTitle}
            </span>
            <div className={childrenBlockClass}>
                {children}
            </div>
        </div>
    );
};

export default FooterInfoBlock;
