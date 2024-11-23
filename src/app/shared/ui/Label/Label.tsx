import React from 'react';
import {LabelColor} from '@/app/shared/ui/Label/Label.enums';
import classnames from 'classnames';

export interface ILabelProps {
    text?: string;
    color: string;
    discount?: number,
}

const Label: React.FC<ILabelProps> = ({
                                          text,
                                          color,
                                          discount,
                                      }) => {

    const commonBlockClass = 'flex rounded-[4px] min-w-[80px] min-h-[27px] ';

    const blockClass = classnames(commonBlockClass, {
        'bg-danger border-danger': color === LabelColor.RED,
        'bg-blue border-blue': color === LabelColor.BLUE,
    });
    const textClass = 'text-body-small font-normal mx-2 my-[3px] text-white leading-body';
    return (
        <div className={blockClass}>
            {discount && discount > 0 ?
                <span className={textClass}>Sale: {discount}%</span> :
                <span className={textClass}>{text}</span>}
        </div>
    );
};

export default Label;
