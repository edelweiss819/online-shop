import React from 'react';
import SocialNetworkButton from '@/app/shared/ui/social-network-button/social-network-button';
import {SocialNetworkName} from '@/app/shared/ui/social-network-button/social-network-button.enums';

const FooterLowerBlock: React.FC = () => {
    return (
        <div>
            <div className={'w-full bg-gray-9 h-[88px]'}>
                <div className={'flex justify-center h-full'}>
                    <div className={'grid grid-cols-3 items-center w-full max-w-base-width border-t border-gray-5'}>
                        <div className={'flex justify-start'}>
                            <SocialNetworkButton socialNetworkName={SocialNetworkName.Facebook}/>
                            <SocialNetworkButton socialNetworkName={SocialNetworkName.Twitter}/>
                            <SocialNetworkButton socialNetworkName={SocialNetworkName.Pinterest}/>
                            <SocialNetworkButton socialNetworkName={SocialNetworkName.Instagram}/>
                        </div>
                        <div className={'text-body-small leading-body font-normal text-gray-4 text-center'}>
                            Ecobazar eCommerce © 2021. All Rights Reserved
                        </div>
                        <div className={'text-white text-right'}>App Block</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterLowerBlock;
