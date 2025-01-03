import React from 'react';
import HomePageBlock from '@/app/shared/ui/home-page-block/home-page-block';
import ProductCategoryCard
    from '@/app/entities/product-category/ui/product-category-card/product-category-card';
import {ProductCategory} from '@/app/entities/product-category/model/product-category';

interface PopularCategoriesBlockProps {
    categories: ProductCategory[];
    mt?: number;
}

const PopularCategoriesBlock: React.FC<PopularCategoriesBlockProps> = ({
                                                                           categories,
                                                                           mt = 0,
                                                                       }) => {

    //TODO Заменить на index на category.id
    return (
        <div style={{marginTop: `${mt}px`}}>
            <HomePageBlock title="Popular categories">
                <div className="grid grid-cols-6 gap-6">
                    {categories.map((category, index) => (
                        <ProductCategoryCard key={index}
                                             category={category}/>
                    ))}
                </div>
            </HomePageBlock>
        </div>
    );
};

export default PopularCategoriesBlock;
