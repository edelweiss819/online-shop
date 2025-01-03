import React from 'react';
import HomePageBlock from '@/app/shared/ui/home-page-block/home-page-block';
import {IProduct} from '@/app/entities/product/model/product';
import ProductCard from '@/app/entities/product/ui/product-card/product-card';
import {ProductCardSize} from '@/app/entities/product/ui/product-card/product-card.enums';

export type PopularProductsBlockProps = {
    products: IProduct[];
    mt?: number;
}

const PopularProductsBlock: React.FC<PopularProductsBlockProps> = ({
                                                                       products,
                                                                       mt = 0
                                                                   }) => {
    //TODO Заменить index на product.id
    return (
        <div style={{marginTop: `${mt}px`}}>
            <HomePageBlock title="Popular Products">
                <div className="grid grid-cols-5 gap-0">
                    {products.map((product, index) => (
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
