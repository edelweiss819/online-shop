import * as React from 'react';

export interface IChevronDownProps {
    width?: number;
    height?: number;
    className?: string;
}

const ChevronDown = ({
                         width = 8.003906,
                         height = 4.502075,
                         className
                     }: IChevronDownProps) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 8.00391 4.50208"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}
    >
        <defs/>
        <path
            id="Vector"
            d="M7.5 0.5L4 4L0.5 0.5"
            stroke="currentColor"
            strokeOpacity={1}
            strokeWidth={1}
            strokeLinejoin="round"
            strokeLinecap="round"
        />
    </svg>
);
export default ChevronDown;
