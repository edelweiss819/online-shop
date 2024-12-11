'use client';

import React, {useState} from 'react';
import {
    ProductCardSize
} from '@/app/entities/product/ui/ProductCard/ProductCard.enums';
import Image from 'next/image';
import classnames from 'classnames';
import Bag from '@/app/assets/Bag/Bag';
import AddToWishlist from '@/app/assets/AddToWishlist/AddToWishlist';
import Eye from '@/app/assets/Eye/Eye';
import {extractCardImageSize} from '@/app/shared/utils';
import StarRating from '@/app/features/rating/components/StarRating/StarRating';
import {IProduct} from '@/app/entities/product/model/product';
import {PRODUCT_FALLBACK_IMAGE} from '@/app/constants';

export interface ProductCardProps {
    cardType: ProductCardSize;
    product: IProduct
}

const ProductCard: React.FC<ProductCardProps> = ({
                                                     cardType,
                                                     product,
                                                 }) => {
    const [rating, setRating] = useState<number>(product.rating.rating);
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
    const productCardClass = classnames(commonProductCardClass, {
        'w-[248px] h-[340px] rounded-[5px]': cardType === ProductCardSize.S,
        'w-[264px] h-[326px]':
            cardType === ProductCardSize.M,
        'w-[312px] h-[408px] rounded-[5px]': cardType === ProductCardSize.L,

    });

    const imageClass = classnames({
                                      'w-[246px] h-[246px] m-[0px]': cardType === ProductCardSize.S,
                                      'w-[254px] h-[230px] m-[5px]': cardType === ProductCardSize.M,
                                      'w-[302px] h-[302px] m-[5px]': cardType === ProductCardSize.L,
                                  })
    const {
        width,
        height
    } = extractCardImageSize(imageClass);


    const topIconsClass = 'w-[40px] h-[40px] bg-white hover:bg-primary border border-gray-0.5 rounded-full flex items-center justify-center cursor-pointer';
    const bagIconCommonClass = 'absolute right-[11px] w-[40px] h-[40px] bg-gray-0.5 hover:bg-primary rounded-full flex items-center justify-center cursor-pointer'
    const bagIconClass = classnames(bagIconCommonClass, {
        'top-6': cardType === ProductCardSize.S,
        'top-[20px]':
            cardType === ProductCardSize.M,
        'top-5': cardType === ProductCardSize.L,

    })

    const topBlockIconsCommonClass = 'absolute right-0 flex flex-col items-end gap-[6px]'
    const topBlockIconsClass = classnames(topBlockIconsCommonClass, {
        'mr-4 mt-4': cardType === ProductCardSize.S,
        'mt-4 mr-4':
            cardType === ProductCardSize.M,
        'mt-5 mr-5': cardType === ProductCardSize.L,
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
            <div className={imageClass}>
                <Image
                    className={'w-full h-full'}
                    width={width}
                    height={height}
                    src={product.images.small || PRODUCT_FALLBACK_IMAGE}
                    alt={product.name}
                />
            </div>
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
                    ${product.priceInfo.price}
                </div>
                <StarRating rating={rating}
                            onRatingChange={(newRating) => setRating(newRating)}/>
            </div>
        </div>
    );
};

export default ProductCard;
