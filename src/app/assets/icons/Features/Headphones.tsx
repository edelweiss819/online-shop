import * as React from 'react';
import {FeatureIconsType} from '@/app/types/SVGComponentsTypes/FeatureIconsType';

const Headphones: React.FC<FeatureIconsType> = ({className}) => (
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
            <clipPath id="clip629_3527">
                <rect
                    id="headphones 1"
                    rx={0}
                    width={39}
                    height={39}
                    transform="translate(0.500000 0.500000)"
                    fill="white"
                    fillOpacity={0}
                />
            </clipPath>
        </defs>
        <rect
            id="headphones 1"
            rx={0}
            width={39}
            height={39}
            transform="translate(0.500000 0.500000)"
            fill="#FFFFFF"
            fillOpacity={0}
        />
        <g clipPath="url(#clip629_3527)">
            <path
                id="Vector"
                d="M33.68 15.21L33.68 13.67C33.68 9.99 32.38 6.57 30.02 4.03C27.6 1.42 24.27 0 20.64 0L19.37 0C15.74 0 12.41 1.42 9.99 4.03C7.63 6.57 6.33 9.99 6.33 13.67L6.33 15.21C3.46 15.4 1.18 17.78 1.18 20.7L1.18 23.1C1.18 26.14 3.65 28.61 6.69 28.61L9.79 28.61C10.34 28.61 10.8 28.15 10.8 27.6L10.8 16.2C10.8 15.64 10.34 15.19 9.79 15.19L8.34 15.19L8.34 13.67C8.34 7.02 13.08 2.01 19.36 2.01L20.63 2.01C26.92 2.01 31.65 7.02 31.65 13.67L31.65 15.19L30.2 15.19C29.65 15.19 29.19 15.64 29.19 16.2L29.19 27.59C29.19 28.15 29.65 28.6 30.2 28.6L31.61 28.6C31.2 33.86 27.58 35.08 25.9 35.36C25.44 33.94 24.1 32.91 22.53 32.91L20.01 32.91C18.06 32.91 16.47 34.5 16.47 36.45C16.47 38.4 18.06 40 20.01 40L22.54 40C24.17 40 25.54 38.89 25.95 37.39C26.77 37.27 28.07 36.98 29.37 36.22C31.19 35.15 33.35 32.98 33.64 28.59C36.52 28.42 38.81 26.02 38.81 23.1L38.81 20.69C38.81 17.78 36.55 15.39 33.68 15.21ZM8.8 26.58L6.71 26.58C4.78 26.58 3.22 25.02 3.22 23.1L3.22 20.69C3.22 18.77 4.78 17.21 6.71 17.21L8.8 17.21L8.8 26.58ZM22.54 37.98L20.01 37.98C19.17 37.98 18.49 37.3 18.49 36.46C18.49 35.62 19.17 34.94 20.01 34.94L22.54 34.94C23.38 34.94 24.06 35.62 24.06 36.46C24.06 37.3 23.38 37.98 22.54 37.98ZM36.8 23.1C36.8 25.02 35.23 26.58 33.31 26.58L31.22 26.58L31.22 17.21L33.31 17.21C35.23 17.21 36.8 18.77 36.8 20.69L36.8 23.1Z"
                fill="currentColor"
                fillOpacity={1}
                fillRule="nonzero"
            />
        </g>
    </svg>
);
export default Headphones;
