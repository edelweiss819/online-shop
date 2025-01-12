import React from 'react';
import {LabelColor} from '@/app/shared/ui/label/label.enums';
import classnames from 'classnames';

export interface ILabelProps {
    color: string;
    children?: React.ReactNode;
}

const Label: React.FC<ILabelProps> = ({
                                          color,
                                          children,
                                      }) => {

    const commonBlockClass: string = 'flex rounded-[4px] ';

    const blockClass = classnames(commonBlockClass, {
        'bg-danger border-danger': color === LabelColor.RED,
        'bg-blue border-blue': color === LabelColor.BLUE,
        'bg-warning border-warning': color === LabelColor.ORANGE,
        'bg-gray-9 border-gray-9': color === LabelColor.BLACK
    });

    return (
        <div className={blockClass}>
            {children}
        </div>
    );
};

export default Label;
