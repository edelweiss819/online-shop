import * as React from 'react';

export interface IAddToWishlistBigIconProps {
    width?: number;
    height?: number;
    className?: string;
}

const AddToWishlistBigIcon: React.FC<IAddToWishlistBigIconProps> = ({
                                                                        width = 32,
                                                                        height = 32,
                                                                        className
                                                                    }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}

    >

        <defs/>
        <rect
            id="Heart"
            rx={0}
            width={31}
            height={31}
            transform="translate(0.500000 0.500000)"
            fill="#FFFFFF"
            fillOpacity={0}
        />
        <path
            id="Vector"
            d="M15.99 7.45C24 -2.67 42.66 13.33 15.99 28.07C-10.67 13.33 8 -2.67 15.99 7.45Z"
            stroke="#1A1A1A"
            strokeOpacity={1}
            strokeWidth={1.5}
        />
    </svg>
);
export default AddToWishlistBigIcon;