import React, {useState} from 'react';
import AddToWishlist from '@/app/assets/icons/add-to-wishlist/add-to-wishlist';
import Bag from '@/app/assets/icons/bag/bag';
import Eye from '@/app/assets/icons/eye/eye';
import classnames from 'classnames';


const ButtonsBlock: React.FC = () => {
    const [isHoverWishlist, setIsHoverWishlist] = useState(false);
    const [isHoverBag, setIsHoverBag] = useState(false);
    const [isHoverEye, setIsHoverEye] = useState(false);

    const handleMouseEnterWishlist = () => setIsHoverWishlist(true);
    const handleMouseLeaveWishlist = () => setIsHoverWishlist(false);

    const handleMouseEnterBag = () => setIsHoverBag(true);
    const handleMouseLeaveBag = () => setIsHoverBag(false);

    const handleMouseEnterEye = () => setIsHoverEye(true);
    const handleMouseLeaveEye = () => setIsHoverEye(false);

    const bagButtonStyle = 'cursor-pointer flex flex-grow bg-gray-0.5 rounded-full hover:bg-primary';
    const bagButtonTextStyle = classnames('text-body-small text-gray-9 font-semibold ', {
        'text-white': isHoverBag,
    });
    const defaultButtonStyle = 'cursor-pointer flex w-[46px] h-[46px] items-center justify-center rounded-full bg-gray-0.5 hover:bg-primary ';


    return (
        <div className="flex gap-3 w-full">
            {/* Add to Wishlist */}
            <div
                onMouseEnter={handleMouseEnterWishlist}
                onMouseLeave={handleMouseLeaveWishlist}
                className={defaultButtonStyle}
            >
                <AddToWishlist
                    className={isHoverWishlist ? 'text-white' : 'text-gray-9'}
                />
            </div>

            {/* Add to Cart */}
            <div
                onMouseEnter={handleMouseEnterBag}
                onMouseLeave={handleMouseLeaveBag}
                className={bagButtonStyle}
            >
                <div className="inline-flex justify-center w-full gap-3 px-8 py-[14px]">
                    <span className={bagButtonTextStyle}>Add to Cart</span>
                    <Bag
                        className={isHoverBag ? 'text-white' : 'text-gray-9'}
                    />
                </div>
            </div>

            {/* View (eye) */}
            <div
                onMouseEnter={handleMouseEnterEye}
                onMouseLeave={handleMouseLeaveEye}
                className={defaultButtonStyle}
            >
                <Eye
                    className={isHoverEye ? 'text-white' : 'text-gray-9'}
                />
            </div>
        </div>
    );
};

export default ButtonsBlock;
