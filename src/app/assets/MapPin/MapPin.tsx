import * as React from 'react';

export interface IMapPinProps {
    width?: number;
    height?: number;
    className?: string;
}

const MapPin = ({
                    width = 15,
                    height = 18,
                    className
                }: IMapPinProps) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 16 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}
    >
        <desc>{'\n\t\t\tCreated with Pixso.\n\t'}</desc>
        <defs/>
        <path
            id="Vector"
            d="M8 18.5C8 18.5 0.5 13.59 0.5 7.86C0.5 5.91 1.29 4.03 2.69 2.65C4.1 1.27 6.01 0.5 8 0.5C9.98 0.5 11.89 1.27 13.3 2.65C14.7 4.03 15.5 5.91 15.5 7.86C15.5 13.59 8 18.5 8 18.5Z"
            stroke="#666666"
            strokeOpacity={1}
            strokeWidth={1}
            strokeLinejoin="round"
        />
        <path
            id="Vector"
            d="M8 10.31C6.61 10.31 5.5 9.21 5.5 7.86C5.5 6.5 6.61 5.4 8 5.4C9.38 5.4 10.5 6.5 10.5 7.86C10.5 9.21 9.38 10.31 8 10.31Z"
            stroke="#666666"
            strokeOpacity={1}
            strokeWidth={1}
            strokeLinejoin="round"
        />
    </svg>
);
export default MapPin