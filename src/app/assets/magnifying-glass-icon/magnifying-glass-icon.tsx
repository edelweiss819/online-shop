import * as React from 'react';


export interface IMagnifyingGlassIconProps {
    width?: number;
    height?: number;
    className?: string;
}

const MagnifyingGlassIcon: React.FC<IMagnifyingGlassIconProps> = ({
                                                                      width = 20,
                                                                      height = 20,
                                                                      className
                                                                  }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}
    >
        <defs>
            <clipPath id="clip600_248">
                <rect
                    id="Search"
                    rx={0}
                    width={19}
                    height={19}
                    transform="translate(0.500000 0.500000)"
                    fill="white"
                    fillOpacity={0}
                />
            </clipPath>
        </defs>
        <g clipPath="url(#clip600_248)">
            <path
                id="Vector"
                d="M9.16 15.83C5.48 15.83 2.5 12.84 2.5 9.16C2.5 5.48 5.48 2.5 9.16 2.5C12.84 2.5 15.83 5.48 15.83 9.16C15.83 12.84 12.84 15.83 9.16 15.83Z"
                stroke="#1A1A1A"
                strokeOpacity={1}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <path
                id="Vector"
                d="M17.49 17.5L13.87 13.87"
                stroke="#1A1A1A"
                strokeOpacity={1}
                strokeWidth={1.5}
                strokeLinejoin="round"
                strokeLinecap="round"
            />
        </g>
    </svg>
);
export default MagnifyingGlassIcon;
