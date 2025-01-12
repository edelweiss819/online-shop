import React from 'react';
import Steps from '@/app/assets/companies-logo/steps';

import FoodNetwork from '@/app/assets/companies-logo/food-network';
import FoodCoUk from '@/app/assets/companies-logo/food-co-uk';
import BookOffCorporationLogo from '@/app/assets/companies-logo/book-off-corporation-logo';
import GSeries from '@/app/assets/companies-logo/g-series';
import CompanyLogo from '@/app/shared/ui/company-logo/company-logo';
import Mango from '@/app/assets/companies-logo/mango';
import CompaniesDivider from '@/app/assets/dividers/companies-divider';

const CompaniesLogoBlock: React.FC = () => {

    return (
        <section className={'flex flex-row lg:gap-[45px] xl:gap-[80px] justify-center w-full'}>
            <CompanyLogo company={<Steps/>}/>
            <CompaniesDivider/>
            <CompanyLogo company={<Mango/>}/>
            <CompaniesDivider/>
            <CompanyLogo company={<FoodNetwork/>}/>
            <CompaniesDivider/>
            <CompanyLogo company={<FoodCoUk/>}/>
            <CompaniesDivider/>
            <CompanyLogo company={<BookOffCorporationLogo/>}/>
            <CompaniesDivider/>
            <CompanyLogo company={<GSeries/>}/>
        </section>
    );
};

export default CompaniesLogoBlock;
