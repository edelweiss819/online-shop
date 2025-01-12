'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import ClosePopupIcon from '@/app/assets/close-popup-icon/close-popup-icon';
import PopupSubscribeForm from '@/app/shared/ui/forms/popup-subscribe-form/popup-subscribe-form';

export type NewsletterPopupProps = {
    image?: number;
    discountSize?: number;
};

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({
                                                             image,
                                                             discountSize
                                                         }) => {


    const [showModal, setShowModal] = useState<boolean>(false)
    const [isChecked, setIsChecked] = useState<boolean>(false)

    React.useEffect(() => {
        const timer = setTimeout(() => setShowModal(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const imageSrc = `/images/test/popup-images/popup-image_${image}.png`;
    const backdropStyle: string = 'bg-black bg-opacity-80 absolute top-0 left-0 w-full h-full';
    const popupStyle: string = 'bg-white w-[872px] h-[400px] rounded-lg';


    const handleCloseIconClick = () => {
        setShowModal(false);
    }

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };
    // TODO Заменить на глобальный стейт + кеширование, когда буду добавлять Redux
    useEffect(() => {
        (isChecked && setShowModal(false))
    }, [isChecked]);


    return (
        <>
            {showModal && (
                <div className={'fixed top-0 left-0 w-full h-full z-50'}>
                    <div className={backdropStyle}/>
                    <div className={'relative w-full h-full flex items-center justify-center z-10'}>
                        <div className={popupStyle}>
                            <div className={'flex flex-row relative'}>
                                <ClosePopupIcon onClick={handleCloseIconClick}
                                                className={'absolute top-2 right-2 cursor-pointer'}/>
                                <div className={'my-[10px] ml-[10px]'}>
                                    <Image
                                        src={imageSrc}
                                        alt={'Subscribe to our newsletter'}
                                        width={354}
                                        height={380}
                                    />
                                </div>
                                <div className={'ml-[40px] mt-[50px] w-[428px]'}>
                                    <div className={'text-gray-9 text-display-04 leading-heading font-semibold text-center'}>
                                        Subscribe to Our Newsletter
                                    </div>
                                    <div className={'mt-3'}>
                                        <div className={'text-gray-4 text-body-medium text-center font-normal'}>
                                            Subscribe to our newsletter and save{' '}
                                            <span className={'text-warning text-body-medium font-semibold'}>
                                                {discountSize}%
                                            </span>{' '}
                                            money with a discount code today.
                                        </div>
                                        <div className={'mt-[31.5px]'}>
                                            <PopupSubscribeForm setShowModal={setShowModal}
                                                                showModal={showModal}/>
                                        </div>
                                        <div className={'mt-[50px] flex flex-row gap-[6px] justify-center items-center'}>
                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={handleCheckboxChange}
                                                id="newsletter-checkbox"
                                                className={'cursor-pointer'}
                                            />
                                            <label htmlFor="newsletter-checkbox"
                                                   className="text-body-small font-normal leading-body text-gray-6">
                                                Do not show this window
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NewsletterPopup;
