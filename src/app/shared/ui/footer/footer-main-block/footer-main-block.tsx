import React from 'react';
import FooterInfoBlock
    from '@/app/shared/ui/footer/footer-main-block/footer-info-block/footer-info-block';
import {
    CONTACT_EMAIL,
    NAV_FOOTER_ACCOUNT_LINKS, NAV_FOOTER_HELPS_LINKS,
    NAV_FOOTER_PROXY_LINKS,
    PHONE_NUMBER
} from '@/app/constants';
import {
    InfoBlockType
} from '@/app/shared/ui/footer/footer-main-block/footer-info-block/footer-info-block.enums';
import FooterNavListBlock
    from '@/app/shared/ui/nav/footer-nav/footer-nav-list-block/footer-nav-list-block';

const FooterMainBlock: React.FC = () => {
    const contactsTextStyle: string = 'contacts-text-style text-body-small leading-body font-medium text-white';
    return (
        <div className={'w-full bg-gray-9 h-[372px]'}>
            <div className={'flex justify-center my-20 lg:mx-[20px] xl:mx-0'}>
                <div className={'flex flex-row w-full max-w-base-width gap-[78px]'}>
                    <div>
                        <FooterInfoBlock blockTitle={'About Shopery'}
                                         blockType={InfoBlockType.CONTACT_BLOCK}>
                            <div className={'flex flex-col gap-[23px]'}>
                                <span className={'text-body-small font-normal leading-body text-gray-5'}>
                            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui,
                            eget bibendum magna congue nec.
                        </span>
                                <div className={'flex flex-row gap-4'}>
                                <span className={contactsTextStyle}>
                                {PHONE_NUMBER}
                            </span>
                                    <span className={'text-body-medium leading-body text-gray-5 font-normal'}>
                                or
                            </span>
                                    <span className={contactsTextStyle}>
                                {CONTACT_EMAIL}
                            </span>
                                </div>
                            </div>

                        </FooterInfoBlock>
                    </div>
                    <div className={'flex flex-row gap-[78px]'}>
                        <FooterNavListBlock blockTitle={'My Account'}
                                            linksArray={NAV_FOOTER_ACCOUNT_LINKS}/>
                        <FooterNavListBlock blockTitle={'Helps'}
                                            linksArray={NAV_FOOTER_HELPS_LINKS}/>
                        <FooterNavListBlock blockTitle={'Proxy'}
                                            linksArray={NAV_FOOTER_PROXY_LINKS}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterMainBlock;
