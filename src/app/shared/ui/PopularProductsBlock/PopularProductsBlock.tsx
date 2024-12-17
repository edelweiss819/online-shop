import React from 'react';
import HomePageBlock from '@/app/shared/ui/HomePageBlock/HomePageBlock';
import {IProduct} from '@/app/entities/product/model/product';
import ProductCard from '@/app/entities/product/ui/ProductCard/ProductCard';
import {ProductCardSize} from '@/app/entities/product/ui/ProductCard/ProductCard.enums';

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
            <HomePageBlock title="Popular categories">
                <div className="grid grid-cols-5">
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
