import React from 'react';
import Label from '@/app/shared/ui/label/label';
import {LabelColor} from '@/app/shared/ui/label/label.enums';

export interface IDiscountLabelProps {
    discountSize: number;
}

const DiscountLabel: React.FC<IDiscountLabelProps> = ({
                                                          discountSize
                                                      }) => {
    const textClass = 'text-body-small font-normal mx-2 my-[3px] text-white leading-body';
    return (
        <Label color={LabelColor.RED}>
            {discountSize && discountSize > 0 &&
				<span className={textClass}>Sale: {discountSize}%</span>
            }
        </Label>
    );
};

export default DiscountLabel;
