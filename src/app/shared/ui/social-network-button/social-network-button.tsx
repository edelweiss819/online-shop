import React from 'react';
import Link from 'next/link';
import {SOCIAL_NETWORKS_LINKS} from '@/app/constants';
import {SocialNetworkName} from '@/app/shared/ui/social-network-button/social-network-button.enums';
import FacebookIcon from '@/app/assets/icons/social-networks/facebook-icon';
import TwitterIcon from '@/app/assets/icons/social-networks/twitter-icon';
import PinterestIcon from '@/app/assets/icons/social-networks/pinterest-icon';
import InstagramIcon from '@/app/assets/icons/social-networks/instagram-icon';

export interface ISocialButtonProps {
    socialNetworkName: SocialNetworkName;
}

const SocialNetworkButton: React.FC<ISocialButtonProps> = ({socialNetworkName}) => {
    const socialNetwork = SOCIAL_NETWORKS_LINKS.find(link => link.title === socialNetworkName);


    const renderIcon = () => {
        switch (socialNetworkName) {
            case 'Facebook':
                return <FacebookIcon/>;
            case 'Twitter':
                return <TwitterIcon/>;
            case 'Pinterest':
                return <PinterestIcon/>;
            case 'Instagram':
                return <InstagramIcon/>;
            default:
                return null;
        }
    }

    const socialNetworkHref = socialNetwork?.href;

    return (
        <div className={'rounded-full bg-inherit hover:bg-primary'}>
            <Link href={socialNetworkHref!}
                  className={'text-gray-7 hover:text-white'}>
                {renderIcon()}
            </Link>
        </div>
    );
};

export default SocialNetworkButton;
