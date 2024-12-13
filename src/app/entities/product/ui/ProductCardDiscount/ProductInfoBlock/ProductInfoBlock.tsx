import React from 'react';
import {calcDiscountedPrice} from '@/app/shared/utils';
import StarRating from '@/app/features/rating/components/StarRating/StarRating';
import {IProduct} from '@/app/entities/product/model/product';

export interface IProductInfoBlockProps {
    isHoverCard: boolean;
    product: IProduct;
}

const ProductInfoBlock: React.FC<IProductInfoBlockProps> = ({
                                                                isHoverCard,
                                                                product
                                                            }) => {
    return (
        <>
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
        </>
    );
};

export default ProductInfoBlock;
