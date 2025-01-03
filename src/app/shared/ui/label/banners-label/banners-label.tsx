import React from 'react';
import Label from '@/app/shared/ui/label/label';
import {LabelColor} from '@/app/shared/ui/label/label.enums';

export interface IBannersLabelProps {
    discountSize: number;
}

const BannersLabel: React.FC<IBannersLabelProps> = ({
                                                        discountSize,
                                                    }) => {
    const labelTextClass = 'text-body-xl leading-body font-semibold text-white px-3 py-1 ';
    return (
        <Label color={LabelColor.ORANGE}>
            <div className={labelTextClass}>
                {discountSize}% OFF
            </div>
        </Label>
    );
};

export default BannersLabel;
