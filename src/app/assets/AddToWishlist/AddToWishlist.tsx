import * as React from 'react';

export interface IAddToWishlistProps {
    className: string;
}

const AddToWishlist: React.FC<IAddToWishlistProps> = ({className}) => (
    <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}
    >
        <desc>{'\n\t\t\tCreated with Pixso.\n\t'}</desc>
        <defs/>
        <rect
            id="Heart"
            rx={0}
            width={19}
            height={19}
            transform="translate(0.500000 0.500000)"
            fill="#FFFFFF"
            fillOpacity={0}
        />
        <path
            id="Vector"
            d="M9.99 4.65C15 -1.67 26.66 8.33 9.99 17.54C-6.67 8.33 5 -1.67 9.99 4.65Z"
            stroke="currentColor"
            strokeOpacity={1}
            strokeWidth={1.5}
        />
    </svg>
);
export default AddToWishlist;
