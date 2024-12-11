import * as React from 'react';

export interface IPhoneRecevierIconProps {
    width?: number;
    height?: number;
    className?: string
}

const PhoneRecevierIcon: React.FC<IPhoneRecevierIconProps> = ({
                                                                  width = 28,
                                                                  height = 28,
                                                                  className
                                                              }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}

    >
        <defs>
            <clipPath id="clip686_54151">
                <rect
                    id="PhoneCall 1"
                    rx={0}
                    width={27}
                    height={27}
                    transform="translate(0.500000 0.500000)"
                    fill={'currentColor'}
                    fillOpacity={0}
                />
            </clipPath>
        </defs>
        <g clipPath="url(#clip686_54151)">
            <path
                id="Vector"
                d="M17.43 4.37C18.91 4.77 20.27 5.55 21.35 6.64C22.44 7.72 23.22 9.08 23.62 10.56"
                stroke="currentColor"
                strokeOpacity={1}
                strokeWidth={1.5}
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <path
                id="Vector"
                d="M16.53 7.75C17.42 7.99 18.23 8.46 18.88 9.11C19.53 9.76 20 10.57 20.24 11.46"
                stroke="currentColor"
                strokeOpacity={1}
                strokeWidth={1.5}
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <path
                id="Vector"
                d="M14.38 17.9C14.52 17.96 14.67 17.99 14.82 17.98C14.97 17.97 15.11 17.92 15.24 17.83L17.98 16.01C18.1 15.93 18.24 15.88 18.38 15.86C18.53 15.85 18.67 15.87 18.81 15.93L23.93 18.13C24.1 18.2 24.25 18.33 24.34 18.49C24.44 18.66 24.48 18.85 24.45 19.04C24.29 20.3 23.67 21.47 22.71 22.31C21.76 23.15 20.52 23.62 19.25 23.62C15.3 23.62 11.52 22.05 8.73 19.26C5.94 16.47 4.37 12.69 4.37 8.75C4.37 7.47 4.84 6.23 5.68 5.28C6.52 4.32 7.69 3.7 8.95 3.54C9.14 3.51 9.33 3.55 9.5 3.65C9.66 3.74 9.79 3.89 9.86 4.06L12.06 9.19C12.12 9.32 12.14 9.47 12.13 9.61C12.11 9.75 12.07 9.89 11.99 10.01L10.17 12.79C10.09 12.92 10.04 13.06 10.03 13.21C10.02 13.36 10.05 13.51 10.11 13.65C11.02 15.5 12.52 17 14.38 17.9Z"
                stroke="currentColor"
                strokeOpacity={1}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
        </g>
    </svg>
);
export default PhoneRecevierIcon;
