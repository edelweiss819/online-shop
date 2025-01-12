'use client';

import React, {useState} from 'react';
import {ProductCardSize} from '@/app/entities/product/ui/product-card/product-card.enums';
import Image from 'next/image';
import classnames from 'classnames';
import Bag from '@/app/assets/icons/bag/bag';
import AddToWishlist from '@/app/assets/icons/add-to-wishlist/add-to-wishlist';
import Eye from '@/app/assets/icons/eye/eye';
import StarRating from '@/app/features/rating/components/star-rating/star-rating';
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
    const [isHoverCard, setIsHoverCard] = useState<boolean>(false);

    const handleMouseEnterBag = () => setIsHoverBag(true);
    const handleMouseLeaveBag = () => setIsHoverBag(false);
    const handleMouseEnterWishlist = () => setIsHoverWishlist(true);
    const handleMouseLeaveWishlist = () => setIsHoverWishlist(false);
    const handleMouseEnterEye = () => setIsHoverEye(true);
    const handleMouseLeaveEye = () => setIsHoverEye(false);
    const handleMouseEnterCard = () => setIsHoverCard(true);
    const handleMouseLeaveCard = () => setIsHoverCard(false);


    const commonProductCardClass = classnames('bg-white', {
        'border border-hard-primary shadow-card-standard transition-shadow duration-150 ease-in-out z-10': isHoverCard,
        'border border-gray-1 z-0': !isHoverCard,
    })
    const productCardClass = classnames(commonProductCardClass, {
        'lg:min-w-[220px]  lg:flex-1 xl:w-[248px] h-[340px] rounded-[5px]': cardType === ProductCardSize.S,
        'lg:min-w-[210px] lg:flex-1  xl:max-w-full xl:w-[264px] h-[327px]':
            cardType === ProductCardSize.M,
        'lg:min-w-[312px] h-[408px] lg:flex-1  rounded-[5px] ': cardType === ProductCardSize.L,

    });

    const imageClass = classnames({
                                      'lg:w-[200px] xl:w-[246px] h-[246px] m-[0px] relative': cardType === ProductCardSize.S,
                                      ' xl:max-w-full  xl:w-[254px] h-[230px] lg:m-[2px] xl:m-[5px] relative': cardType === ProductCardSize.M,
                                      'w-[302px] h-[302px] m-[5px] relative': cardType === ProductCardSize.L,
                                  })


    const topIconsClass: string = 'w-[40px] h-[40px] bg-white hover:bg-primary border border-gray-0.5 rounded-full flex items-center justify-center cursor-pointer';
    const bagIconCommonClass: string = 'absolute right-[11px] w-[40px] h-[40px] bg-gray-0.5 hover:bg-primary rounded-full flex items-center justify-center cursor-pointer'
    const bagIconClass = classnames(bagIconCommonClass, {
        'top-6': cardType === ProductCardSize.S,
        'top-[20px]':
            cardType === ProductCardSize.M,
        'top-5': cardType === ProductCardSize.L,

    })

    const topBlockIconsCommonClass: string = 'absolute right-0 flex flex-col items-end gap-[6px]'
    const topBlockIconsClass = classnames(topBlockIconsCommonClass, {
        'mr-4 mt-4': cardType === ProductCardSize.S,
        'mt-4 mr-4':
            cardType === ProductCardSize.M,
        'mt-5 mr-5': cardType === ProductCardSize.L,
    })


    return (
        <div className={productCardClass}
             onMouseEnter={handleMouseEnterCard}
             onMouseLeave={handleMouseLeaveCard}>
            <div className="relative flex-1">
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
                    fill
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
            <div className={'mt-3 lg-w-[200px] xl-w-[240px] pl-[11px]'}>
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
