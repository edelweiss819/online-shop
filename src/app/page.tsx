import React from 'react';
import ProductCardMini from '@/app/entities/product/ui/ProductCardMini/ProductCardMini';
import {IProduct} from '@/app/entities/product/model/product';
import ProductCard from '@/app/entities/product/ui/ProductCard/ProductCard';
import ProductCardDiscount from '@/app/entities/product/ui/ProductCardDiscount/ProductCardDiscount';
import {ProductCardSize} from '@/app/entities/product/ui/ProductCard/ProductCard.enums';


const testProduct1: IProduct = {
    id: '456',
    name: 'Green Apple',
    category: 'Vegetables',
    tags: ['healthy food'],
    priceInfo: {
        price: 20.99,
        discount: {
            size: 50,
            endTime: 1732658400,
        },
    },
    images: {
        small: '/images/test/apple-product.png',
        large: '/images/test/apple-big-product.png',


    },
    rating: {
        rating: 2,
        totalFeedbackCount: 1000,
    },
};


const testProduct2: IProduct = {
    id: '123',
    name: 'Chanise Cabbage',
    category: 'Vegetables',
    tags: ['healthy food'],
    priceInfo: {
        price: 14.99,
    },
    images: {
        small: '/images/test/chanise-cabbage.png'
    },
    rating: {
        rating: 4,
        totalFeedbackCount: 500
    }
}


const Home: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col gap-2 bg-white m-5">
                <ProductCardDiscount product={testProduct1}/>
                <ProductCardMini product={testProduct2}/>
                <ProductCardMini product={testProduct1}/>
                <ProductCard cardType={ProductCardSize.S}
                             product={testProduct1}/>
            </div>
        </div>
    )
};

export default Home
