'use client';
import React, {useState, useEffect} from 'react';
import {IProduct} from '@/app/entities/product/model/product';
import BlockHeading from '@/app/shared/ui/home-page-block/block-heading/block-heading';
import ProductCard from '@/app/entities/product/ui/product-card/product-card';
import {ProductCardSize} from '@/app/entities/product/ui/product-card/product-card.enums';
import {usePaddedItems} from '@/app/shared/hooks';

export type FeaturedProductsBlockProps = {
    products: IProduct[];
}

const FeaturedProductsBlock: React.FC<FeaturedProductsBlockProps> = ({products}) => {
    const [paddedTo, setPaddedTo] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1360) {
                setPaddedTo(5);
            } else {
                setPaddedTo(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const featuredProducts = usePaddedItems(products, paddedTo);

    return (
        <>
            <BlockHeading title={'Featured Products'}/>
            <div className={'xl:grid xl:grid-cols-5 xl:mx-0 lg:grid lg:grid-cols-4 lg:mx-[20px]'}>
                {featuredProducts.map((product, index) => {
                    return (
                        <div key={index}
                             className={'z-0 hover:z-10 lg:flex-1 '}>
                            <ProductCard cardType={ProductCardSize.M}
                                         product={product}/>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default FeaturedProductsBlock;
