import * as React from 'react';

export interface IBagBigIconProps {
    width?: number;
    height?: number;
    className?: string;
}

const BagBigIcon: React.FC<IBagBigIconProps> = ({
                                                    width = 34,
                                                    height = 34,
                                                    className
                                                }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs/>
        <path
            id="Rectangle"
            d="M29.75 29.75L4.25 29.75L7.08 14.16L11.33 14.16L22.66 14.16L26.91 14.16L29.75 29.75ZM11.33 14.16L11.33 9.91C11.33 6.78 13.87 4.25 17 4.25C20.12 4.25 22.66 6.78 22.66 9.91L22.66 14.16M11.33 14.16L11.33 18.41M22.66 14.16L22.66 18.41"
            stroke="#1A1A1A"
            strokeOpacity={1}
            strokeWidth={1.5}
            strokeLinejoin="round"
            strokeLinecap="round"
        />
    </svg>
);
export default BagBigIcon