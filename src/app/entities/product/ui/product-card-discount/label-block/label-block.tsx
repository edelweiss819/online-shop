import React from 'react';
import DiscountLabel from '@/app/shared/ui/label/discount-label/discount-label';
import BestSaleLabel from '@/app/shared/ui/label/best-sale-label/best-sale-label';
import NewLabel from '@/app/shared/ui/label/new-label/new-label';
import OutOfStockLabel from '@/app/shared/ui/label/out-of-stock-label/out-of-stock-label';

export interface ILabelBlockProps {
    discountSize?: number;
    isNew: boolean;
    quantity: number;
}

const LabelBlock: React.FC<ILabelBlockProps> = ({
                                                    discountSize,
                                                    isNew,
                                                    quantity
                                                }) => {
    return (
        <div className={'flex flex-row gap-2 pt-6 pl-6 relative z-10'}>
            {discountSize && <DiscountLabel discountSize={discountSize}/>}
            <BestSaleLabel/>
            {isNew && <NewLabel/>}
            {quantity === 0 && <OutOfStockLabel/>}
        </div>
    );
};

export default LabelBlock;
