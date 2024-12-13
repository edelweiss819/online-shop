import React from 'react';
import DiscountLabel from '@/app/shared/ui/Label/DiscountLabel/DiscountLabel';
import BestSaleLabel from '@/app/shared/ui/Label/BestSaleLabel/BestSaleLabel';
import NewLabel from '@/app/shared/ui/Label/NewLabel/NewLabel';
import OutOfStockLabel from '@/app/shared/ui/Label/OutOfStockLabel/OutOfStockLabel';

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
