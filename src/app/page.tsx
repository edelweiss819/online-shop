import React from 'react';
import Button from '@/app/components/Button/Button';
import {
    ButtonFillStyle,
    ButtonSize
} from '@/app/components/Button/Button.enums';


const Home: React.FC = () => {
    return (
        <div className="">
          <Button text={'Small button'} size={ButtonSize.S} fill={ButtonFillStyle.FILL}/>
            <Button text={'Small button'} size={ButtonSize.S} fill={ButtonFillStyle.BORDER}/>
            <Button text={'Small button'} size={ButtonSize.S} fill={ButtonFillStyle.GHOST}/>
            <Button text={'Medium button'} size={ButtonSize.M} fill={ButtonFillStyle.FILL}/>
            <Button text={'Medium button'} size={ButtonSize.M} fill={ButtonFillStyle.BORDER}/>
            <Button text={'Medium button'} size={ButtonSize.M} fill={ButtonFillStyle.GHOST}/>
            <Button text={'Large button'} size={ButtonSize.L} fill={ButtonFillStyle.FILL}/>
            <Button text={'Large button'} size={ButtonSize.L} fill={ButtonFillStyle.BORDER}/>
            <Button text={'Large button'} size={ButtonSize.L} fill={ButtonFillStyle.GHOST}/>
        </div>)
};

export default Home
