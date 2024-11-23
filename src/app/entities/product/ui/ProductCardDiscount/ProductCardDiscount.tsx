'use client'
import React, {useState} from 'react';
import {IProduct} from '@/app/entities/product/model/product';
import Label from '@/app/shared/ui/Label/Label';
import {LabelColor} from '@/app/shared/ui/Label/Label.enums';
import Image from 'next/image';
import Bag from '@/app/assets/Bag/Bag';
import Eye from '@/app/assets/Eye/Eye';
import AddToWishlist from '@/app/assets/AddToWishlist/AddToWishlist';


export interface IProductCardDiscount {
    product: IProduct;
}

const ProductCardDiscount: React.FC<IProductCardDiscount> = ({product}) => {
    const [rating, setRating] = useState<number>(0);
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
    const blockStyle = 'relative w-[528px] h-[654px] bg-white border-1 border-gray-1 hover:border-hard-primary hover:shadow-card-standard transition-shadow duration-150 ease-in-out';

    return (
        <div className={blockStyle}>
            <div className={'inline flex flex-row gap-2 mt-6 ml-6'}>
                <Label color={LabelColor.RED} discount={50}/>
                <Label color={LabelColor.BLUE} text={'Best sales'}/>
            </div>
            <div className={'absolute top-0 right-0 left-0'}>
                <Image
                    className={'h-full w-full'}
                    width={525}
                    height={446}
                    src={product.imageBigProductSrc}
                    alt={product.name}
                />
                <div>
                    <div className="flex gap-3 mt-[4px]">
                        <div
                            onMouseEnter={handleMouseEnterBag}
                            onMouseLeave={handleMouseLeaveBag}
                        >
                            <Bag
                                className={isHoverBag ? 'text-white' : 'text-gray-9'}/>
                        </div>
                        <div
                            onMouseEnter={handleMouseEnterEye}
                            onMouseLeave={handleMouseLeaveEye}
                        >
                            <Eye
                                className={isHoverEye ? 'text-white' : 'text-gray-9'}/>
                        </div>
                        <div
                            onMouseEnter={handleMouseEnterWishlist}
                            onMouseLeave={handleMouseLeaveWishlist}
                        >
                            <AddToWishlist
                                className={isHoverWishlist ? 'text-white' : 'text-gray-9'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardDiscount;
