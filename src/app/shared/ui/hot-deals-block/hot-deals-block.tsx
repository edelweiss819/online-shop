import React from 'react';
import {IProduct} from '@/app/entities/product/model/product';
import BlockHeading from '@/app/shared/ui/home-page-block/block-heading/block-heading';
import ProductCardDiscount
    from '@/app/entities/product/ui/product-card-discount/product-card-discount';
import ProductCard from '@/app/entities/product/ui/product-card/product-card';
import {ProductCardSize} from '@/app/entities/product/ui/product-card/product-card.enums';

export type HotDealsBlockProps = {
    products: IProduct[];
    currentTimeFromServer: number;
}

const HotDealsBlock: React.FC<HotDealsBlockProps> = ({
                                                         products,
                                                         currentTimeFromServer,
                                                     }) => {
    const mainProduct = products[0];
    const otherProducts = products.slice(1);

    return (
        <>
            <BlockHeading title={'Hot Deals'}/>
            <div className="grid grid-cols-5 grid-rows-3 gap-0">
                <div className="col-span-2 row-span-2">
                    <ProductCardDiscount product={mainProduct}
                                         currentTimeFromServer={currentTimeFromServer}/>
                </div>
                {otherProducts.map((product, index) => (
                    <div key={index}
                         className="col-span-1 z-0 hover:z-10">
                        <ProductCard cardType={ProductCardSize.M}
                                     product={product}/>
                    </div>
                ))}
            </div>
        </>
    );
};

export default HotDealsBlock;
