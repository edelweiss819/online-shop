'use client';

import React, {useState} from 'react';
import {ProductCardEnums} from '@/app/features/ProductCard/ProductCard.enums';
import Image from 'next/image';
import classnames from 'classnames';
import Bag from '@/app/assets/Bag/Bag';
import AddToWishlist from '@/app/assets/AddToWishlist/AddToWishlist';
import Eye from '@/app/assets/Eye/Eye';
import {extractCardImageSize} from '@/app/utils';

const StarRating = ({
                        rating,
                        onRatingChange
                    }) => {
    const starsCount = 5;

    return (
        <div className="flex items-center">
            {[...Array(starsCount)].map((_, index) => (
                <label key={index} className={'-mt-[2px]'}>
                    <input
                        type="radio"
                        value={index + 1}
                        checked={rating === index + 1}
                        onChange={onRatingChange}
                        className="hidden"
                    />
                    <span
                        className={`cursor-pointer text-4] ${
                            rating >= index + 1 ? 'text-warning' : 'text-gray-2'
                        }`}
                    >
                        ★
                    </span>
                </label>
            ))}
        </div>
    );
};

export interface ProductCardProps {
    cardType: ProductCardEnums;
    showTestImage?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
                                                     cardType,
                                                     showTestImage,
                                                 }) => {
    const [rating, setRating] = useState<number>(0);
    const [isHoverBag, setIsHoverBag] = useState<boolean>(false);
    const [isHoverWishlist, setIsHoverWishlist] = useState<boolean>(false);
    const [isHoverEye, setIsHoverEye] = useState<boolean>(false);

    const handleMouseEnterBag = () => setIsHoverBag(true);
    const handleMouseLeaveBag = () => setIsHoverBag(false);
    const handleMouseEnterWishlist = () => setIsHoverWishlist(true);
    const handleMouseLeaveWishlist = () => setIsHoverWishlist(false);
    const handleMouseEnterEye = () => setIsHoverEye(true);
    const handleMouseLeaveEye = () => setIsHoverEye(false);


    const commonProductCardClass = 'bg-white m-[5px] border border-gray-1 hover:border-primary hover:shadow-card-standard transition-shadow duration-150 ease-in-out ';
    const productCardClass = classnames({
                                            [commonProductCardClass]: true,
                                            'w-[248px] h-[340px] rounded-[5px]': cardType === ProductCardEnums.S,
                                            'w-[264px] h-[326px]':
                                                cardType === ProductCardEnums.M,
                                            'w-[312px] h-[408px] rounded-[5px]': cardType === ProductCardEnums.L,

                                        });

    const imageClass = classnames({
                                      'w-[246px] h-[246px] m-[0px]': cardType === ProductCardEnums.S,
                                      'w-[254px] h-[230px] m-[5px]': cardType === ProductCardEnums.M,
                                      'w-[302px] h-[302px] m-[5px]': cardType === ProductCardEnums.L,
                                  })
    const {
        width,
        height
    } = extractCardImageSize(imageClass);


    const topIconsClass = 'w-[40px] h-[40px] bg-white hover:bg-primary border border-gray-0.5 rounded-full flex items-center justify-center cursor-pointer';
    const bagIconCommonClass = 'absolute right-[11px] w-[40px] h-[40px] bg-gray-0.5 hover:bg-primary rounded-full flex items-center justify-center cursor-pointer'
    const bagIconClass = classnames({
                                        [bagIconCommonClass]: true,
                                        'top-6': cardType === ProductCardEnums.S,
                                        'top-[20px]':
                                            cardType === ProductCardEnums.M,
                                        'top-5': cardType === ProductCardEnums.L,

                                    })

    const topBlockIconsCommonClass = 'absolute right-0 flex flex-col items-end gap-[6px]'
    const topBlockIconsClass = classnames({
                                              [topBlockIconsCommonClass]: true,
                                              'mr-4 mt-4': cardType === ProductCardEnums.S,
                                              'mt-4 mr-4':
                                                  cardType === ProductCardEnums.M,
                                              'mt-5 mr-5': cardType === ProductCardEnums.L,
                                          })


    return (
        <div className={productCardClass}>
            <div className="relative">
                <div className={topBlockIconsClass}>
                    <div
                        onMouseEnter={handleMouseEnterWishlist}
                        onMouseLeave={handleMouseLeaveWishlist}
                        className={topIconsClass}>
                        <AddToWishlist
                            className={isHoverWishlist ? 'text-white' : 'text-gray-9'}/>
                    </div>
                    <div
                        onMouseEnter={handleMouseEnterEye}
                        onMouseLeave={handleMouseLeaveEye}
                        className={topIconsClass}>
                        <Eye
                            className={isHoverEye ? 'text-white' : 'text-gray-9'}/>
                    </div>
                </div>
            </div>
            {showTestImage && (
                <div className={imageClass}>
                    <Image
                        className={'w-full h-full'}
                        width={width}
                        height={height}
                        src="/images/test/apple-product.png"
                        alt="Product"
                    />
                </div>
            )}
            <div className="relative">
                <div
                    onMouseEnter={handleMouseEnterBag}
                    onMouseLeave={handleMouseLeaveBag}
                    className={bagIconClass}>
                    <Bag
                        className={isHoverBag ? 'text-white' : 'text-gray-9'}/>
                </div>
            </div>
            <div className={'mt-3 w-240px pl-[11px]'}>
                <div className={'text-body-small text-gray-7'}>Green Apple
                </div>
                <div className={'text-body-medium font-medium text-gray-9'}>
                    $14.99
                </div>
                <StarRating rating={rating}
                            onRatingChange={(e) => setRating(Number(e.target.value))}/>
            </div>
        </div>
    );
};

export default ProductCard;
