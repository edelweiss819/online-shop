import React from 'react';
import FeaturedBlock from '@/app/shared/ui/featured-block/featured-block';
import TopBannersBlock from '@/app/shared/ui/banners-blocks/top-banners-block/top-banners-block';
import {ProductCategory} from '@/app/entities/product-category/model/product-category';
import PopularCategoriesBlock
    from '@/app/shared/ui/popular-categories-block/popular-categories-block';
import PopularProductsBlock from '@/app/shared/ui/popular-products-block/popular-products-block';
import {getCurrentServerTime} from '@/app/shared/utils';
import SecondBannersBlock
    from '@/app/shared/ui/banners-blocks/second-banners-block/second-banners-block';
import HotDealsBlock from '@/app/shared/ui/hot-deals-block/hot-deals-block';
import LargeDiscountBanner_1
    from '@/app/shared/ui/banners/large-discount-banners/large-discount-banner_1';
import CentredHomePageBlock from '@/app/shared/ui/centred-home-page-block/centred-home-page-block';
import FeaturedProductsBlock from '@/app/shared/ui/featured-products-block/featured-products-block';
import {User, UserRole} from '@/app/entities/user/model/user';
import HomePageCommentsBlock
    from '@/app/shared/ui/home-page-comments-block/home-page-comments-block';
import {UserComment} from '@/app/entities/user-comment/model/user-comment';
import CompaniesLogoBlock from '@/app/shared/ui/companies-logo-block/companies-logo-block';
import NewsletterPopup from '@/app/shared/ui/popups/newssletter-popup/newsletter-popup';

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
            endTime: 1735682400,
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


const TestUser: User = {
    id: '1',
    name: 'John',
    surname: 'Doe',
    email: 'john@doe.com',
    role: UserRole.Customer,
    avatarSrc: '/images/test/users-avatars/user-avatar_1.png',
}


const TestComment: UserComment = {
    author: {
        id: TestUser.id,
        name: TestUser.name,
        surname: TestUser.surname,
        role: TestUser.role,
        avatarSrc: TestUser.avatarSrc,
    },
    content: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget (Testimonial Card)',
    rating: 5,
    id: 1

}

const TestCommentArray = Array(16).fill(null).map((_, index) => ({
    ...TestComment,
    id: index + 1
}));

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
const FeaturedProductArray = Array(5).fill(testProduct1);


const Home: React.FC = async () => {
    const currentTimeFromServer = await getCurrentServerTime();


    return (
        <main>
            <CentredHomePageBlock color={'white'}>
                <div className={'mt-6'}>
                    <TopBannersBlock/>
                    <div className={'mt-6'}>
                        <FeaturedBlock/>
                    </div>
                    <PopularCategoriesBlock categories={ProductCategoriesTest}
                                            mt={60}/>
                    <PopularProductsBlock products={ProductsArrayTest}
                                          mt={50}/>
                    <div className={'my-[60px]'}>
                        <SecondBannersBlock currentTimeFromServer={currentTimeFromServer}/>
                    </div>
                </div>
            </CentredHomePageBlock>
            <CentredHomePageBlock color={'gray-secondary'}>
                <div className={'max-w-base-width w-full mx-auto'}>
                    <div className={'py-[60px]'}>
                        <HotDealsBlock products={HotDealsProductArray}
                                       currentTimeFromServer={currentTimeFromServer}/>
                    </div>
                </div>
            </CentredHomePageBlock>
            <CentredHomePageBlock color={'white'}>
                <div className={'mt-6 ]'}>
                    <LargeDiscountBanner_1 imageAlt={'Summer Sale'}
                                           bannerBackground={1}
                                           discountSize={37}/>
                </div>
                <div className={'my-[60px]'}>
                    <FeaturedProductsBlock products={FeaturedProductArray}/>
                </div>
            </CentredHomePageBlock>
            <CentredHomePageBlock color={'gray-secondary'}>
                <div className={'py-[60px]'}>
                    <HomePageCommentsBlock comments={TestCommentArray}
                                           commentsPerPage={3}/>
                </div>
            </CentredHomePageBlock>
            <CentredHomePageBlock color={'white'}>
                <div className={'py-[60px] ]'}>
                    <CompaniesLogoBlock/>
                </div>
            </CentredHomePageBlock>
            <NewsletterPopup image={1}
                             discountSize={20}/>
        </main>
    );
}

export default Home;
