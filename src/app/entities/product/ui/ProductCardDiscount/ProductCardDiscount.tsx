'use client'
import React, {useState, useEffect} from 'react';
import {IProduct} from '@/app/entities/product/model/product';
import Label from '@/app/shared/ui/Label/Label';
import {LabelColor} from '@/app/shared/ui/Label/Label.enums';
import Image from 'next/image';
import Bag from '@/app/assets/Bag/Bag';
import Eye from '@/app/assets/Eye/Eye';
import AddToWishlist from '@/app/assets/AddToWishlist/AddToWishlist';
import classnames from 'classnames';
import {
    calcDiscountedPrice,
    calcDiscountTimeRemaining,
    formatDateWithLeadingZero
} from '@/app/shared/utils';
import StarRating from '@/app/features/rating/components/StarRating/StarRating';
import {PRODUCT_FALLBACK_IMAGE} from '@/app/constants';


export interface IProductCardDiscount {
    product: IProduct;
}

const ProductCardDiscount: React.FC<IProductCardDiscount> = ({product}) => {
    const [isHoverCard, setIsHoverCard] = useState<boolean>(false);
    const [isHoverBag, setIsHoverBag] = useState<boolean>(false);
    const [isHoverWishlist, setIsHoverWishlist] = useState<boolean>(false);
    const [isHoverEye, setIsHoverEye] = useState<boolean>(false);
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const [endTime, setEndTime] = useState(
        formatDateWithLeadingZero(
            calcDiscountTimeRemaining(product.priceInfo.discount?.endTime!, currentTimeInSeconds)));

    const handleMouseEnterCard = () => setIsHoverCard(true);
    const handleMouseLeaveCard = () => setIsHoverCard(false);
    const handleMouseEnterBag = () => setIsHoverBag(true);
    const handleMouseLeaveBag = () => setIsHoverBag(false);
    const handleMouseEnterWishlist = () => setIsHoverWishlist(true);
    const handleMouseLeaveWishlist = () => setIsHoverWishlist(false);
    const handleMouseEnterEye = () => setIsHoverEye(true);
    const handleMouseLeaveEye = () => setIsHoverEye(false);

    const blockStyle = 'relative w-[528px] h-[654px] bg-white border border-gray-1 hover:border-hard-primary hover:shadow-card-standard transition-shadow duration-150 ease-in-out';
    const bagButtonStyle = 'cursor-pointer flex flex-grow bg-gray-0.5 rounded-full hover:bg-primary';
    const bagButtonTextStyle = classnames('text-body-small text-gray-9 font-semibold ', {
        'text-white': isHoverBag,
    });
    const defaultButtonStyle = 'cursor-pointer flex w-[46px] h-[46px] items-center justify-center rounded-full bg-gray-0.5 hover:bg-primary ';
    const remainingTimeCellStyle = 'w-[60px] flex flex-col items-center justify-center';
    const dateTextStyle = 'text-[10px] text-gray-4 leading-[100%] font-medium';
    const timerTextStyle = 'text-body-large text-gray-9 leading-body] font-medium';
    const timerColonStyle = 'pt-1 font-semibold';


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
                <div className={'flex flex-row gap-2 pt-6 pl-6 relative z-10'}>
                    <Label color={LabelColor.RED} discount={product.priceInfo.discount?.size}/>
                    <Label color={LabelColor.BLUE} text={'Best sales'}/>
                </div>
                <div className={'absolute top-0 right-0 left-0'}>
                    <div className={'w-[526px] h-[446px]'}>
                        <Image
                            className={'h-full w-full'}
                            width={526}
                            height={446}
                            src={product.images.large || PRODUCT_FALLBACK_IMAGE}
                            alt={product.name}
                        />
                    </div>
                    <div
                        className={'flex flex-col mx-6 -mt-[70px]'}>
                        <div className="flex gap-3 w-full">
                            <div
                                onMouseEnter={handleMouseEnterWishlist}
                                onMouseLeave={handleMouseLeaveWishlist}
                                className={defaultButtonStyle}
                            >
                                <AddToWishlist
                                    className={isHoverWishlist ? 'text-white' : 'text-gray-9'}
                                />
                            </div>
                            <div
                                onMouseEnter={handleMouseEnterBag}
                                onMouseLeave={handleMouseLeaveBag}
                                className={bagButtonStyle}
                            >
                                <div
                                    className={'inline-flex justify-center w-full gap-3 px-8 py-[14px] '}>
                                    <span className={bagButtonTextStyle}>Add to Cart</span>
                                    <Bag
                                        className={isHoverBag ? 'text-white' : 'text-gray-9'}
                                    />
                                </div>
                            </div>
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
                        <div className={'flex flex-col w-full mt-9 items-center justify-center'}>
                            <div
                                className={'text-body-large leading-body ' + (isHoverCard ? 'text-hard-primary' : 'text-gray-9')}>{product.name}
                            </div>
                            <div
                                className={'inline-flex gap-1 mt-1 text-body-large font-medium leading-body'}>
                                <div className={'text-gray-9'}>
                                    {'$' + calcDiscountedPrice(product.priceInfo.price, product.priceInfo.discount?.size!)}
                                </div>
                                <div className={'line-through text-gray-4'}>
                                    {'$' + product.priceInfo.price}
                                </div>
                            </div>
                        </div>
                        <div className={'inline-flex gap-1 justify-center mt-1'}>
                            <StarRating rating={product.rating.rating}/>
                            <div
                                className={'text-body-tiny leading-130 font-normal text-gray-5 mt-[2px]'}>
                                {`(${product.rating.totalFeedbackCount} Feedback)`}
                            </div>
                        </div>
                        <div
                            className={'w-full inline-flex flex-col items-center justify-center mt-[18px] mb-6'}>
                            <div
                                className={'text-gray-4 text-body-small font-normal leading-[18px]'}>
                                Hurry up! Offer ends In:
                            </div>
                            <div className={'flex flex-row mt-3'}>
                                <div className={remainingTimeCellStyle}>
                                    <div className={timerTextStyle}>
                                        {endTime.days}
                                    </div>
                                    <div
                                        className={dateTextStyle}>
                                        DAYS
                                    </div>
                                </div>
                                <div className={remainingTimeCellStyle}>
                                    <div className={timerTextStyle}>
                                        {endTime.hours}
                                    </div>
                                    <div className={dateTextStyle}>
                                        HOURS
                                    </div>
                                </div>
                                <div className={timerColonStyle}>
                                    :
                                </div>
                                <div className={remainingTimeCellStyle}>
                                    <div className={timerTextStyle}>
                                        {endTime.minutes}
                                    </div>
                                    <div className={dateTextStyle}>
                                        MINUTES
                                    </div>
                                </div>
                                <div className={timerColonStyle}>
                                    :
                                </div>
                                <div className={remainingTimeCellStyle}>
                                    <div className={timerTextStyle}>
                                        {endTime.seconds}
                                    </div>
                                    <div className={dateTextStyle}>
                                        SECS
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardDiscount;
