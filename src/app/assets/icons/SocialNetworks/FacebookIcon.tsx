import * as React from 'react';
import {SocialNetworksIconsType} from '@/app/types/SocialNetworksIconsType';


const FacebookIcon: React.FC<SocialNetworksIconsType> = ({className}) => (
    <svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}
    >
        <defs>
            <clipPath id="clip53_965">
                <rect
                    id="facebook 1"
                    rx={0}
                    width={17}
                    height={17}
                    transform="translate(11.500000 11.500015)"
                    fill="white"
                    fillOpacity={0}
                />
            </clipPath>
        </defs>
        <rect
            id="facebook 1"
            rx={0}
            width={17}
            height={17}
            transform="translate(11.500000 11.500015)"
            fill="#FFFFFF"
            fillOpacity={0}
        />
        <g clipPath="url(#clip53_965)">
            <path
                id="Vector"
                d="M22.99 13.98L24.64 13.98L24.64 11.12C24.35 11.08 23.38 11 22.24 11C19.87 11 18.25 12.49 18.25 15.22L18.25 17.75L15.64 17.75L15.64 20.94L18.25 20.94L18.25 29L21.46 29L21.46 20.95L23.96 20.95L24.36 17.75L21.46 17.75L21.46 15.54C21.46 14.62 21.71 13.98 22.99 13.98Z"
                fill="currentColor"
                fillOpacity={1}
                fillRule="nonzero"
            />
        </g>
    </svg>
);

export default FacebookIcon;
