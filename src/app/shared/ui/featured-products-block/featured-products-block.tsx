import React from 'react';
import {IProduct} from '@/app/entities/product/model/product';
import BlockHeading from '@/app/shared/ui/home-page-block/block-heading/block-heading';
import ProductCard from '@/app/entities/product/ui/product-card/product-card';
import {ProductCardSize} from '@/app/entities/product/ui/product-card/product-card.enums';

export type FeaturedProductsBlockProps = {
    products: IProduct[];
}

const FeaturedProductsBlock: React.FC<FeaturedProductsBlockProps> = ({products}) => {
    return (
        <>
            <BlockHeading title={'Featured Products'}/>
            <div className={'grid grid-cols-5'}>
                {products.map((product, index) => {
                    return (
                        <div key={index}
                             className={'z-0 hover:z-10'}>
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
