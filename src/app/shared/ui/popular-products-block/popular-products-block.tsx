'use client';
import React, {useEffect, useState} from 'react';
import HomePageBlock from '@/app/shared/ui/home-page-block/home-page-block';
import {IProduct} from '@/app/entities/product/model/product';
import ProductCard from '@/app/entities/product/ui/product-card/product-card';
import {ProductCardSize} from '@/app/entities/product/ui/product-card/product-card.enums';
import {usePaddedItems} from '@/app/shared/hooks/use-padded-items';

export type PopularProductsBlockProps = {
    products: IProduct[];
    mt?: number;
}

const PopularProductsBlock: React.FC<PopularProductsBlockProps> = ({
                                                                       products,
                                                                       mt = 0
                                                                   }) => {
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

    const popularProducts = usePaddedItems(products, paddedTo);

    //TODO Заменить index на product.id
    return (
        <div style={{marginTop: `${mt}px`}}>
            <HomePageBlock title="Popular Products">
                <div className="xl:grid xl:grid-cols-5 xl:gap-0 xl:mx-0 lg:grid lg:grid-cols-4 lg:mx-[20px] ">
                    {popularProducts.map((product, index) => (
                        <ProductCard key={index}
                                     product={product}
                                     cardType={ProductCardSize.M}/>
                    ))}
                </div>
            </HomePageBlock>
        </div>
    );
};

export default PopularProductsBlock;
