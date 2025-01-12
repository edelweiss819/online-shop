'use client'
import React, {useEffect, useState} from 'react';
import {IProduct} from '@/app/entities/product/model/product';
import Image from 'next/image';
import {calcDiscountTimeRemaining, formatDateWithLeadingZero} from '@/app/shared/utils';
import {PRODUCT_FALLBACK_IMAGE} from '@/app/constants';
import LabelBlock from '@/app/entities/product/ui/product-card-discount/label-block/label-block';
import ButtonsBlock
    from '@/app/entities/product/ui/product-card-discount/buttons-block/buttons-block';
import ProductInfoBlock
    from '@/app/entities/product/ui/product-card-discount/product-info-block/product-info-block';
import OfferEndsBlock
    from '@/app/entities/product/ui/product-card-discount/offer-ends-block/offer-ends-block';
import classnames from 'classnames';


export interface IProductCardDiscount {
    product: IProduct;
    currentTimeFromServer: number
}

const ProductCardDiscount: React.FC<IProductCardDiscount> = ({
                                                                 product,
                                                                 currentTimeFromServer
                                                             }) => {
    const [isHoverCard, setIsHoverCard] = useState<boolean>(false);
    const handleMouseEnterCard = () => setIsHoverCard(true);
    const handleMouseLeaveCard = () => setIsHoverCard(false);
    const blockStyle = classnames('relative flex-1 h-[654px] bg-white', {
        'border border-hard-primary shadow-card-standard transition-shadow duration-150 ease-in-out z-10': isHoverCard,
        'border border-gray-1 z-0': !isHoverCard,
    })


    const initialTime = Math.floor(currentTimeFromServer / 1000);
    const [currentTime, setCurrentTime] = useState<number>(initialTime);

    const [remainingTime, setRemainingTime] = useState(() =>
                                                           product.priceInfo.discount?.endTime
                                                               ? calcDiscountTimeRemaining(initialTime, product.priceInfo.discount?.endTime)
                                                               : {
                                                                   days: 0,
                                                                   hours: 0,
                                                                   minutes: 0,
                                                                   seconds: 0
                                                               }
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const updatedTime = calcDiscountTimeRemaining(currentTime, product.priceInfo.discount?.endTime);
        setRemainingTime(updatedTime);
    }, [
                  product.priceInfo.discount?.endTime,
                  currentTime
              ]);


    const endTime = formatDateWithLeadingZero(remainingTime);


    return (
        <div
            className={'lg:w-full xl:w-[528px] flex'}
            onMouseEnter={handleMouseEnterCard}
            onMouseLeave={handleMouseLeaveCard}>
            <div className={blockStyle}>
                <LabelBlock discountSize={product.priceInfo.discount?.size}
                            isNew={product.isNew}
                            quantity={product.quantity}/>
                <div className={'absolute top-0 right-0 left-0'}>
                    <div className={'lg:w-full xl:w-[446px] h-[450px] relative flex min-w-full'}>
                        <Image
                            className={'w-full h-full -z-10 flex-1'}
                            fill
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
