import * as React from 'react';

export type ClosePopupProps = {
    className?: string;
    onClick?: () => void;
}
const ClosePopupIcon: React.FC<ClosePopupProps> = ({
                                                       className,
                                                       onClick
                                                   }) => (
    <svg
        width={45}
        height={45}
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}
        onClick={onClick}
    >
        <defs>
            <clipPath id="clip50_12657">
                <rect
                    id="x 1"
                    rx={0}
                    width={24}
                    height={24}
                    transform="translate(10.500000 10.500000)"
                    fill="white"
                    fillOpacity={0}
                />
            </clipPath>
        </defs>
        <circle
            id="Ellipse 2"
            cx={22.5}
            cy={22.5}
            r={22.5}
            fill="#FFFFFF"
            fillOpacity={1}
        />
        <rect
            id="x 1"
            rx={0}
            width={24}
            height={24}
            transform="translate(10.500000 10.500000)"
            fill="#FFFFFF"
            fillOpacity={0}
        />
        <g clipPath="url(#clip50_12657)">
            <path
                id="Vector"
                d="M28.75 16.25L16.25 16.25"
                stroke="#1A1A1A"
                strokeOpacity={1}
                strokeWidth={1.5}
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <path
                id="Vector"
                d="M16.25 16.25L28.75 16.25"
                stroke="#1A1A1A"
                strokeOpacity={1}
                strokeWidth={1.5}
                strokeLinejoin="round"
                strokeLinecap="round"
            />
        </g>
    </svg>
);
export default ClosePopupIcon;
