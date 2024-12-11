import React from 'react';
import {TitleColor} from '@/app/shared/ui/LogoVariants/LogoWithTitle/LogoWithTitle.enums';
import LogoPlant from '@/app/assets/LogoPlant/LogoPlant';
import classnames from 'classnames';

export interface ILogoWithTitleProps {
    titleColor: TitleColor;
}

const LogoWithTitle: React.FC<ILogoWithTitleProps> = ({titleColor}) => {
    const titleStyle = classnames('text-display-06 font-medium leading-[38px] -tracking-[3%]', {
        ['text-gray-9']: titleColor === TitleColor.DARK,
        ['text-white']: titleColor === TitleColor.LIGHT,
    })


    return (
        <div className="flex flex-row gap-2 items-center">
            <LogoPlant className={'text-primary'}/>
            <span className={titleStyle}>Ecobazar</span>
        </div>
    );
};

export default LogoWithTitle;
