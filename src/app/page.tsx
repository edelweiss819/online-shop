import React from 'react';
import ProductCardMini
    from '@/app/entities/product/ui/ProductCardMini/ProductCardMini';
import {IProduct} from '@/app/entities/product/model/product';
import ProductCard from '@/app/entities/product/ui/ProductCard/ProductCard';
import ProductCardDiscount
    from '@/app/entities/product/ui/ProductCardDiscount/ProductCardDiscount';


const testProduct1: IProduct = {
    id: '456',
    name: 'Green Apple',
    price: 20.99,
    imageSrc: '/images/test/apple-product.png',
    imageBigProductSrc: '/images/test/apple-big-product.png'
}

const testProduct2: IProduct = {
    id: '123',
    name: 'Chanise Cabbage',
    price: 14.99,
    imageSrc: '/images/test/chanise-cabbage.png',
}


const Home: React.FC = () => {
    return (
        <div className="flex flex-col gap-2 bg-gray-2 m-5">
            <ProductCardDiscount product={testProduct1}/>
            <ProductCardMini product={testProduct2}/>
            <ProductCardMini product={testProduct1}/>
            <ProductCard cardType={'S'} product={testProduct1}/>
        </div>)
};

export default Home
