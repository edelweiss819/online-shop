'use client'
import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {PRODUCT_FALLBACK_IMAGE} from '@/app/constants';
import {ProductCategory} from '@/app/entities/product-category/model/product-category';
import classnames from 'classnames';


export type ProductCategoryCardProps = {
    category: ProductCategory
}

const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({
                                                                     category
                                                                 }) => {

    const [isHoverCard, setHoverCard] = useState<boolean>(false);

    const handleEnterCard = () => setHoverCard(true);
    const handleLeaveCard = () => setHoverCard(false);
    const textClass = classnames('text-body-large font-medium leading-body mt-4 mb-6 text-center', {
        'text-gray-9': !isHoverCard,
        'text-hard-primary z-10': isHoverCard,
    })

    return (
        <Link className={'max-w-[200px] w-full min-h-[213px] bg-white border border-gray-1 hover:border-primary hover:shadow-card-standard transition-shadow duration-150 ease-in-out '}
              href={category.href}
              onMouseEnter={handleEnterCard}
              onMouseLeave={handleLeaveCard}>
            <div className={'w-[190px] h-[130px] mt-4 mx-[5px]'}>
                <Image
                    className={'w-full h-full'}
                    width={190}
                    height={130}
                    src={category.imageSrc || PRODUCT_FALLBACK_IMAGE}
                    alt={category.shownName}
                />
            </div>
            <div className={textClass}>
                {category.shownName}
            </div>
        </Link>
    );
};

export default ProductCategoryCard;
