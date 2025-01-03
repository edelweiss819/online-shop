import React from 'react';
import Label from '@/app/shared/ui/label/label';
import {LabelColor} from '@/app/shared/ui/label/label.enums';


const NewLabel: React.FC = () => {
    const textClass = 'text-body-small font-normal mx-2 my-[3px] text-white leading-body';
    return (
        <Label color={LabelColor.ORANGE}>
            <span className={textClass}>New</span>
        </Label>
    );
};

export default NewLabel;
