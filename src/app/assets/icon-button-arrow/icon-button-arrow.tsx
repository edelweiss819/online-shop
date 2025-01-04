import * as React from 'react';

export interface IIconButtonArrowProps {
    width?: number;
    height?: number;
    className?: string;
}

const IconButtonArrow = ({
                             width = 16.5,
                             height = 13.555115,
                             className
                         }: IIconButtonArrowProps) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 16.5 13.5551"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}

    >
        <defs/>
        <path
            id="Vector"
            d="M15.75 6.77L0.75 6.77"
            stroke="currentColor"
            strokeOpacity={1}
            strokeWidth={1.5}
            strokeLinejoin="round"
            strokeLinecap="round"
        />
        <path
            id="Vector"
            d="M9.7 0.75L15.75 6.77L9.7 12.8"
            stroke="currentColor"
            strokeOpacity={1}
            strokeWidth={1.5}
            strokeLinejoin="round"
            strokeLinecap="round"
        />
    </svg>
);
export default IconButtonArrow;
