import React from 'react';
import FeaturedBlock from '@/app/shared/ui/FeaturedBlock/FeaturedBlock';
import TopBannersBlock from '@/app/shared/ui/BannersBlocks/TopBannersBlock/TopBannersBlock';
import {ProductCategory} from '@/app/entities/product-category/model/product-category';
import PopularCategoriesBlock from '@/app/shared/ui/PopularCategoriesBlock/PopularCategoriesBlock';
import PopularProductsBlock from '@/app/shared/ui/PopularProductsBlock/PopularProductsBlock';
import MediumBanner1 from '@/app/shared/ui/Banners/MediumBanners/MediumBanner1';
import MediumBanner2 from '@/app/shared/ui/Banners/MediumBanners/MediumBanner2';
import MediumBanner3 from '@/app/shared/ui/Banners/MediumBanners/MediumBanner3';
import {getCurrentServerTime} from '@/app/shared/utils';
import SecondBannersBlock
    from '@/app/shared/ui/BannersBlocks/SecondBannersBlock/SecondBannersBlock';
import HotDealsBlock from '@/app/shared/ui/HotDealsBlock/HotDealsBlock';

const testProduct1 = {
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
            endTime: 1735596000
        }
    },
    images: {
        small: '/images/test/apple-product.png',
        large: '/images/test/apple-big-product.png'
    },
    rating: {
        rating: 2,
        totalFeedbackCount: 1000
    },
};

const FruitCategory: ProductCategory = {
    id: '1',
    name: 'Fruits',
    shownName: 'Fresh Fruit',
    href: '/categories/fruits',
    imageSrc: '/images/test/categories/1.png',
};

const ProductCategoriesTest = Array(12).fill(FruitCategory);
const ProductsArrayTest = Array(10).fill(testProduct1);
const HotDealsProductArray = Array(12).fill(testProduct1);


const Home: React.FC = async () => {
    const currentTimeFromServer = await getCurrentServerTime();

    return (
        <div className="flex flex-col">
            <div className={'mt-6 max-w-base-width w-full mx-auto'}>
                <TopBannersBlock/>
                <div className={'mt-6'}>
                    <FeaturedBlock/>
                </div>
                <PopularCategoriesBlock categories={ProductCategoriesTest}
                                        mt={60}/>
                <PopularProductsBlock products={ProductsArrayTest}
                                      mt={50}/>
                <div className={'mt-[60px]'}>
                    <SecondBannersBlock currentTimeFromServer={currentTimeFromServer}/>
                </div>
            </div>
            <div className={'flex flex-col bg-gray-secondary'}>
                <div className={'pt-[60px] max-w-base-width w-full mx-auto'}>
                    <HotDealsBlock products={HotDealsProductArray}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
