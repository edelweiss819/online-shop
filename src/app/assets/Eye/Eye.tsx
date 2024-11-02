import * as React from 'react';

export interface IEyeProps {
    className?: string;
}

const Eye: React.FC<IEyeProps> = ({className}) => (
    <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <desc>{'\n\t\t\tCreated with Pixso.\n\t'}</desc>
        <defs>
            <clipPath id="clip74_104">
                <rect
                    id="Eye 1"
                    rx={0}
                    width={19}
                    height={19}
                    transform="translate(0.500000 0.500000)"
                    fill="white"
                    fillOpacity={0}
                />
            </clipPath>
        </defs>
        <rect
            id="Eye 1"
            rx={0}
            width={19}
            height={19}
            transform="translate(0.500000 0.500000)"
            fill="#FFFFFF"
            fillOpacity={0}
        />
        <g clipPath="url(#clip74_104)">
            <path
                id="Vector"
                d="M1.25 10C1.25 10 3.75 16.45 10 16.45C16.25 16.45 18.75 10 18.75 10C18.75 10 16.25 3.54 10 3.54C3.75 3.54 1.25 10 1.25 10Z"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <path
                id="Vector"
                d="M12.21 12.2C12.79 11.62 13.12 10.82 13.12 10C13.12 9.17 12.79 8.37 12.21 7.79C11.62 7.2 10.82 6.87 10 6.87C9.17 6.87 8.37 7.2 7.79 7.79C7.2 8.37 6.87 9.17 6.87 10C6.87 10.82 7.2 11.62 7.79 12.2C8.37 12.79 9.17 13.12 10 13.12C10.82 13.12 11.62 12.79 12.21 12.2Z"
                stroke="currentColor"
                strokeOpacity={1}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
        </g>
    </svg>
);

export default Eye;
