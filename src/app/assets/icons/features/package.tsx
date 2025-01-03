import * as React from 'react';
import {FeatureIconsType} from '@/app/types/SVGComponentsTypes/FeatureIconType';

const Package: React.FC<FeatureIconsType> = ({className}) => (
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
            <clipPath id="clip629_3586">
                <rect
                    id="package"
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
            id="package"
            rx={0}
            width={39}
            height={39}
            transform="translate(0.500000 0.500000)"
            fill="#FFFFFF"
            fillOpacity={0}
        />
        <g clipPath="url(#clip629_3586)">
            <path
                id="Vector"
                d="M38.39 9.43C38.39 9.27 38.36 9.12 38.29 8.98C38.15 8.69 37.89 8.5 37.61 8.44L20.41 0.1C20.13 -0.04 19.8 -0.04 19.52 0.1L2.16 8.51C1.82 8.67 1.6 9.01 1.58 9.39L1.58 9.4C1.58 9.41 1.58 9.42 1.58 9.43L1.58 30.56C1.58 30.94 1.8 31.3 2.16 31.47L19.52 39.89C19.53 39.89 19.53 39.89 19.54 39.89C19.56 39.9 19.59 39.91 19.62 39.93C19.62 39.93 19.63 39.94 19.65 39.94C19.67 39.94 19.7 39.95 19.72 39.96C19.73 39.96 19.74 39.97 19.75 39.97C19.78 39.98 19.81 39.98 19.83 39.99C19.84 39.99 19.85 39.99 19.86 39.99C19.89 39.99 19.94 40 19.97 40C20 40 20.05 40 20.08 39.99C20.09 39.99 20.1 39.99 20.1 39.99C20.13 39.99 20.16 39.98 20.19 39.97C20.2 39.97 20.21 39.96 20.21 39.96C20.24 39.95 20.27 39.94 20.29 39.94C20.3 39.94 20.31 39.93 20.32 39.93C20.35 39.92 20.37 39.91 20.4 39.89C20.41 39.89 20.41 39.89 20.42 39.89L37.83 31.44C38.18 31.27 38.41 30.92 38.41 30.53L38.41 9.45C38.39 9.44 38.39 9.43 38.39 9.43ZM19.96 2.13L35.02 9.43L29.48 12.13L14.41 4.82L19.96 2.13ZM19.96 16.74L4.9 9.43L12.09 5.95L27.15 13.25L19.96 16.74ZM3.61 11.06L18.95 18.5L18.95 37.35L3.61 29.91L3.61 11.06ZM20.97 37.35L20.97 18.5L28.18 15.01L28.18 19.94C28.18 20.49 28.63 20.95 29.19 20.95C29.75 20.95 30.2 20.49 30.2 19.94L30.2 14.02L36.36 11.03L36.36 29.88L20.97 37.35Z"
                fill="currentColor"
                fillOpacity={1}
                fillRule="nonzero"
            />
        </g>
    </svg>
);
export default Package;
