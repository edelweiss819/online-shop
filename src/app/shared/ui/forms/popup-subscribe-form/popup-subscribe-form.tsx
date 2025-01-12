'use client';
import React, {useState} from 'react';
import Button from '@/app/shared/ui/button/button';

import {ButtonFillStyle, ButtonSize} from '@/app/shared/ui/button/button.enums';

export type PopupSubscribeProps = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    showModal: boolean
}


const PopupSubscribeForm: React.FC<PopupSubscribeProps> = ({
                                                               setShowModal,
                                                               showModal,
                                                           }) => {

    const [email, setEmail] = useState('');
    const handleButtonClick = () => {
        console.log('Button clicked');
        setShowModal(false);
    };
    return (
        <form className={'flex flex-row'}>
            <div className={'flex flex-row border border-gray-1 rounded-[46px] bg-white h-[46px] w-full'}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={'flex-1 px-4 text-body-medium leading-body font-normal text-gray-5 h-[100%] rounded-l-[46px] focus:outline-none '}
                    required={true}
                />
                <div className={'-ml-[62px]'}>
                    <Button
                        onClick={handleButtonClick}
                        text={'Subscribe'}
                        size={ButtonSize.M}
                        fill={ButtonFillStyle.FILL}
                    />
                </div>
            </div>
        </form>
    );
};

export default PopupSubscribeForm;
