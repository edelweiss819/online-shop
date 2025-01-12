import React from 'react';
import Label from '@/app/shared/ui/label/label';
import {LabelColor} from '@/app/shared/ui/label/label.enums';


const BestSale: React.FC = () => {
    const textClass: string = 'text-body-small font-normal mx-2 my-[3px] text-white leading-body';
    return (
        <Label color={LabelColor.BLUE}>
            <span className={textClass}>Best Sale</span>
        </Label>
    );
};

export default BestSale;
