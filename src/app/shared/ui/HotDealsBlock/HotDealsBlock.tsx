import React from 'react';
import {IProduct} from '@/app/entities/product/model/product';
import BlockHeading from '@/app/shared/ui/HomePageBlock/BlockHeading/BlockHeading';
import ProductCardDiscount from '@/app/entities/product/ui/ProductCardDiscount/ProductCardDiscount';
import ProductCard from '@/app/entities/product/ui/ProductCard/ProductCard';
import {ProductCardSize} from '@/app/entities/product/ui/ProductCard/ProductCard.enums';

export type HotDealsBlockProps = {
    products: IProduct[];
}

const HotDealsBlock: React.FC<HotDealsBlockProps> = ({products}) => {
    const mainProduct = products[0];
    const otherProducts = products.slice(1);

    return (
        <>
            <BlockHeading title={'Hot Deals'}/>
            <div className="grid grid-cols-5 grid-rows-3 gap-0 relative">
                <div className="col-span-2 row-span-2">
                    <ProductCardDiscount product={mainProduct}/>
                </div>
                {otherProducts.map((product, index) => (
                    <div key={index}
                         className="col-span-1">
                        <ProductCard cardType={ProductCardSize.M}
                                     product={product}/>
                    </div>
                ))}
            </div>
        </>
    );
};

export default HotDealsBlock;
