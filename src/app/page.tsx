import React from 'react';
import ProductCard from '@/app/features/ProductCard/ProductCard';
import {ProductCardEnums} from '@/app/features/ProductCard/ProductCard.enums';


const Home: React.FC = () => {
    return (
        <div className="flex flex-row">
            <ProductCard cardType={ProductCardEnums.M}
                         showTestImage={true}/>
            <ProductCard cardType={ProductCardEnums.L}
                         showTestImage={true}/>
            <ProductCard cardType={'S'} showTestImage={true}/>
        </div>);
};

export default Home
