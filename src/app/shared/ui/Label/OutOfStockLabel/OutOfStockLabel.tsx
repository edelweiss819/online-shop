import React from 'react';
import Label from '@/app/shared/ui/Label/Label';
import {LabelColor} from '@/app/shared/ui/Label/Label.enums';

const OutOfStockLabel: React.FC = ({}) => {
    const textClass = 'text-body-small font-normal mx-2 my-[3px] text-white leading-body';
    return (
        <Label color={LabelColor.BLACK}>
            <span className={textClass}>Out of stock</span>
        </Label>
    );
};

export default OutOfStockLabel;
