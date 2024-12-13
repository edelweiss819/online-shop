import React from 'react';
import {IProduct} from '@/app/entities/product/model/product';
import FeaturedBlock from '@/app/shared/ui/FeaturedBlock/FeaturedBlock';
import TopBannersBlock from '@/app/shared/ui/BannersBlocks/TopBannersBlock/TopBannersBlock';
import BlockHeading from '@/app/shared/ui/BlockHeading/BlockHeading';
import {ProductCategory} from '@/app/entities/product-category/model/product-category';
import CategoryCard
    from '@/app/entities/product-category/ui/ProductCategoryCard/ProductCategoryCard';


const testProduct1: IProduct = {
    id: '456',
    name: 'Green Apple',
    category: {
        name: 'Vegetables',
        id: '1'
    },
    tags: ['healthy food'],
    quantity: 0,
    isNew: true,
    priceInfo: {
        price: 20.99,
        discount: {
            size: 50,
            endTime: 1735596000,
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
    category: {
        name: 'Vegetables',
        id: '1',
    },
    tags: ['healthy food'],
    quantity: 0,
    isNew: true,
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

const FruitCategory: ProductCategory = {
    id: '1',
    name: 'Fruits',
    shownName: 'Fresh Fruit',
    href: '/categories/fruits',
    imageSrc: '/images/test/categories/1.png'
}


const Home: React.FC = () => {
    return (
        <div className="flex flex-col max-w-base-width w-full mx-auto">
            <div className={'mt-6'}>
                <TopBannersBlock/>
                <div className={'mt-6'}>
                    <FeaturedBlock/>
                </div>
            </div>
            <BlockHeading title={'Popular categories'}/>
            <CategoryCard category={FruitCategory}/>
        </div>
    )
};

export default Home
