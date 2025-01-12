'use client';
import React, {useState} from 'react';
import Button from '@/app/shared/ui/button/button';
import {
    ButtonFillStyle,
    ButtonSize,
    ButtonSpecialModifier
} from '@/app/shared/ui/button/button.enums';


const FooterSubscribeForm: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleButtonClick = () => {
        console.log('Button clicked');

    };

    return (
        <form className={'flex flex-row'}>
            <div className={'flex flex-row border border-gray-1 rounded-[46px] bg-white h-[52px] w-full '}>
                <input
                    type={'email'}
                    placeholder={'Your email address'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={'flex-1 min-w-[160px] w-full text-body-medium leading-body font-normal text-gray-5 my-[14px] ml-6 mr-2 focus:outline-none'}/>
                <div>
                    <Button text={'Subscribe'}
                            size={ButtonSize.SUBSCRIBE}
                            fill={ButtonFillStyle.SUBSCRIBE}
                            specialModifier={ButtonSpecialModifier.SUBSCRIBE}
                            onClick={handleButtonClick}/>
                </div>
            </div>
        </form>
    );
};

export default FooterSubscribeForm;
