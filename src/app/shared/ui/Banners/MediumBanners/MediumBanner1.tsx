'use client';

import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import ButtonWithArrow from '@/app/shared/ui/ButtonWithArrow/ButtonWithArrow';
import {ButtonFillStyle} from '@/app/shared/ui/Button/Button.enums';
import {ButtonWithArrowSize} from '@/app/shared/ui/ButtonWithArrow/ButtonWithArrow.enums';
import {calcDiscountTimeRemaining, formatDateWithLeadingZero} from '@/app/shared/utils';

export type MediumBanner1Props = {
    imageAlt: string;
    bannerBackground: number;
    currentTimeFromServer: number;
};

//TODO дописать апишку, которая бы отдавала время сервера каждую секунду
const MediumBanner1: React.FC<MediumBanner1Props> = ({
                                                         imageAlt,
                                                         bannerBackground,
                                                         currentTimeFromServer,
                                                     }) => {

    const currentTime = Math.floor(currentTimeFromServer / 1000);

    const [endTime, setEndTime] = useState(
        formatDateWithLeadingZero(calcDiscountTimeRemaining(1735682400, currentTime))
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            const remainingTime = calcDiscountTimeRemaining(1735682400, currentTime);
            setEndTime(formatDateWithLeadingZero(remainingTime));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [currentTime]);

    const remainingTimeCellStyle = 'w-[56px] px-1 flex flex-col items-center justify-center';
    const dateTextStyle = 'text-body-tiny text-gray-2 leading-[100%] font-normal';
    const timerTextStyle = 'text-body-xxl text-white leading-body font-normal';
    const timerColonStyle = 'pt-[6px] font-semibold text-gray-2';

    const imageSrc = `/images/test/BannersBackgrounds/MediumBanners/MediumBanner_${bannerBackground}.png`;

    return (
        <div className="w-[424px] h-[536px] relative">
            <Image src={imageSrc}
                   alt={imageAlt}
                   priority={true}
                   width={424}
                   height={536}/>
            <div className="absolute top-[35px] w-full flex flex-col items-center">
                <div className="text-body-small font-medium leading-[100%] text-white">BEST DEALS
                </div>
                <div className="mt-4 text-heading-04 font-semibold leading-heading text-white">Sale
                    of Month
                </div>
                <div className="flex flex-row mt-2">
                    <div className={remainingTimeCellStyle}>
                        <div className={timerTextStyle}>{endTime.days}</div>
                        <div className={dateTextStyle}>DAYS</div>
                    </div>
                    <div className={timerColonStyle}>:</div>
                    <div className={remainingTimeCellStyle}>
                        <div className={timerTextStyle}>{endTime.hours}</div>
                        <div className={dateTextStyle}>HOURS</div>
                    </div>
                    <div className={timerColonStyle}>:</div>
                    <div className={remainingTimeCellStyle}>
                        <div className={timerTextStyle}>{endTime.minutes}</div>
                        <div className={dateTextStyle}>MINS</div>
                    </div>
                    <div className={timerColonStyle}>:</div>
                    <div className={remainingTimeCellStyle}>
                        <div className={timerTextStyle}>{endTime.seconds}</div>
                        <div className={dateTextStyle}>SECS</div>
                    </div>
                </div>
                <div className="mt-6">
                    <ButtonWithArrow text="Shop Now"
                                     size={ButtonWithArrowSize.M}
                                     fill={ButtonFillStyle.BORDER}/>
                </div>
            </div>
        </div>
    );
};

export default MediumBanner1;
