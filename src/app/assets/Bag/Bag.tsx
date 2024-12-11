import * as React from 'react';

export interface IBagProps {
    width?: number;
    height?: number;
    className?: string;
}

const Bag: React.FC<IBagProps> = ({
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
        className={className}
    >
        <desc>{'\n\t\t\tCreated with Pixso.\n\t'}</desc>
        <defs/>
        <path
            id="Rectangle"
            d="M17.5 17.5L2.5 17.5L4.16 8.33L6.66 8.33L13.33 8.33L15.83 8.33L17.5 17.5ZM6.66 8.33L6.66 5.83C6.66 3.99 8.15 2.5 10 2.5C11.84 2.5 13.33 3.99 13.33 5.83L13.33 8.33M6.66 8.33L6.66 10.83M13.33 8.33L13.33 10.83"
            stroke="currentColor"
            strokeOpacity={1}
            strokeWidth={1.3}
            strokeLinejoin="round"
            strokeLinecap="round"
        />
    </svg>
);

export default Bag;
