'use client'
import React, {useState, useEffect} from 'react';
import {IProduct} from '@/app/entities/product/model/product';
import Image from 'next/image';
import {
    calcDiscountTimeRemaining,
    formatDateWithLeadingZero
} from '@/app/shared/utils';
import {PRODUCT_FALLBACK_IMAGE} from '@/app/constants';
import LabelBlock from '@/app/entities/product/ui/ProductCardDiscount/LabelBlock/LabelBlock';
import ButtonsBlock from '@/app/entities/product/ui/ProductCardDiscount/ButtonsBlock/ButtonsBlock';
import ProductInfoBlock
    from '@/app/entities/product/ui/ProductCardDiscount/ProductInfoBlock/ProductInfoBlock';
import OfferEndsBlock
    from '@/app/entities/product/ui/ProductCardDiscount/OfferEndsBlock/OfferEndsBlock';
import classnames from 'classnames';


export interface IProductCardDiscount {
    product: IProduct;
}

const ProductCardDiscount: React.FC<IProductCardDiscount> = ({product}) => {
    const [isHoverCard, setIsHoverCard] = useState<boolean>(false);
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);

    const [endTime, setEndTime] = useState(
        formatDateWithLeadingZero(
            calcDiscountTimeRemaining(product.priceInfo.discount?.endTime!, currentTimeInSeconds)));

    const handleMouseEnterCard = () => setIsHoverCard(true);
    const handleMouseLeaveCard = () => setIsHoverCard(false);
    const blockStyle = classnames('relative w-[528px] h-[654px] bg-white', {
        'border border-hard-primary shadow-card-standard transition-shadow duration-150 ease-in-out z-10': isHoverCard,
        'border border-gray-1 z-0': !isHoverCard,
    })


    useEffect(() => {
        const intervalId = setInterval(() => {
            const remainingTime = calcDiscountTimeRemaining(product.priceInfo.discount?.endTime!, currentTimeInSeconds);
            setEndTime(formatDateWithLeadingZero(remainingTime));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [
                  product,
                  currentTimeInSeconds
              ]);


    return (
        <div
            className={'w-[528px]'}
            onMouseEnter={handleMouseEnterCard}
            onMouseLeave={handleMouseLeaveCard}>
            <div className={blockStyle}>
                <LabelBlock discountSize={product.priceInfo.discount?.size}
                            isNew={product.isNew}
                            quantity={product.quantity}/>
                <div className={'absolute top-0 right-0 left-0'}>
                    <div className={'w-[526px] h-[446px]'}>
                        <Image
                            className={'h-full w-full'}
                            width={526}
                            height={446}
                            priority={true}
                            src={product.images.large || PRODUCT_FALLBACK_IMAGE}
                            alt={product.name}
                        />
                    </div>
                    <div
                        className={'flex flex-col mx-6 -mt-[70px]'}>
                        <ButtonsBlock/>
                        <ProductInfoBlock product={product}
                                          isHoverCard={isHoverCard}/>
                        <OfferEndsBlock endTime={endTime}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardDiscount;
