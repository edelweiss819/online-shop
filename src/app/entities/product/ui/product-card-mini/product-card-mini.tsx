'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import StarRating from '@/app/features/rating/components/star-rating/star-rating';
import Bag from '@/app/assets/icons/bag/bag';
import AddToWishlist from '@/app/assets/icons/add-to-wishlist/add-to-wishlist';
import Eye from '@/app/assets/icons/eye/eye';
import {IProduct} from '@/app/entities/product/model/product';
import classnames from 'classnames';
import {PRODUCT_FALLBACK_IMAGE} from '@/app/constants';

export interface IProductCardMini {
    product: IProduct;
}

const ProductCardMini: React.FC<IProductCardMini> = ({product}) => {
    const [rating, setRating] = useState<number>(product.rating.rating);
    const [isHoverCard, setIsHoverCard] = useState<boolean>(false);
    const [isHoverBag, setIsHoverBag] = useState<boolean>(false);
    const [isHoverWishlist, setIsHoverWishlist] = useState<boolean>(false);
    const [isHoverEye, setIsHoverEye] = useState<boolean>(false);

    const handleMouseEnterCard = () => setIsHoverCard(true);
    const handleMouseLeaveCard = () => setIsHoverCard(false);
    const handleMouseEnterBag = () => setIsHoverBag(true);
    const handleMouseLeaveBag = () => setIsHoverBag(false);
    const handleMouseEnterWishlist = () => setIsHoverWishlist(true);
    const handleMouseLeaveWishlist = () => setIsHoverWishlist(false);
    const handleMouseEnterEye = () => setIsHoverEye(true);
    const handleMouseLeaveEye = () => setIsHoverEye(false);

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    const bagIconClass =
        'w-[40px] h-[40px] bg-gray-0.5 hover:bg-primary rounded-full flex items-center justify-center cursor-pointer';
    const notBagIconClass =
        'w-[40px] h-[40px] bg-white hover:bg-primary rounded-full flex items-center justify-center cursor-pointer';

    const blockClass =
        'h-[116px] w-[424px] bg-white flex grow-0 shrink-1 rounded-[6px] border border-gray-1 hover:border-hard-primary hover:shadow-card-standard transition-shadow duration-150 ease-in-out';
    const leftSubBlock = 'm-[5px] w-[102px] h-[102px]';

    const productNameClass = classnames(
        'text-body-small font-normal cursor-pointer leading-body text-color-gray-7',
        {'text-hard-primary': isHoverCard}
    );

    const rightSubBlock = 'p-6 flex flex-col';

    return (
        <div
            className={blockClass}
            onMouseEnter={handleMouseEnterCard}
            onMouseLeave={handleMouseLeaveCard}
        >
            <div className={leftSubBlock}>
                <Image
                    className={'w-full h-full'}
                    src={product.images.small || PRODUCT_FALLBACK_IMAGE}
                    width={102}
                    height={102}
                    alt={product.name}
                />
            </div>
            <div className={rightSubBlock}>
        <span
            className={productNameClass}>
          {product.name}
        </span>
                {!isHoverCard ? (
                    <>
            <span
                className="text-body-medium font-medium leading-body text-color-gray-9">
              ${product.priceInfo.price}
            </span>
                        <StarRating rating={rating}
                                    onRatingChange={handleRatingChange}/>
                    </>
                ) : (
                    <div className="flex gap-3 mt-[4px]">
                        <div
                            onMouseEnter={handleMouseEnterBag}
                            onMouseLeave={handleMouseLeaveBag}
                            className={bagIconClass}
                        >
                            <Bag
                                className={isHoverBag ? 'text-white' : 'text-gray-9'}/>
                        </div>
                        <div
                            onMouseEnter={handleMouseEnterEye}
                            onMouseLeave={handleMouseLeaveEye}
                            className={notBagIconClass}
                        >
                            <Eye
                                className={isHoverEye ? 'text-white' : 'text-gray-9'}/>
                        </div>
                        <div
                            onMouseEnter={handleMouseEnterWishlist}
                            onMouseLeave={handleMouseLeaveWishlist}
                            className={notBagIconClass}
                        >
                            <AddToWishlist
                                className={isHoverWishlist ? 'text-white' : 'text-gray-9'}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCardMini;
