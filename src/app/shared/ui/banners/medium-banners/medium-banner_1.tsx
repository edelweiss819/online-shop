'use client';

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {
    calcDiscountTimeRemaining, convertTimestampToDate,
    formatDateWithLeadingZero, getEndOfMonthTimestamp,
    IDateFormatInput,
} from '@/app/shared/utils';
import ButtonWithArrow from '@/app/shared/ui/button-with-arrow/button-with-arrow';
import {ButtonWithArrowSize} from '@/app/shared/ui/button-with-arrow/button-with-arrow.enums';
import {ButtonFillStyle} from '@/app/shared/ui/button/button.enums';

export type MediumBanner1Props = {
    imageAlt: string;
    bannerBackground: number;
    currentTimeFromServer: number;
};

const MediumBanner_1: React.FC<MediumBanner1Props> = ({
                                                          imageAlt,
                                                          bannerBackground,
                                                          currentTimeFromServer,
                                                      }) => {

    const monthEndTimestamp = getEndOfMonthTimestamp() / 1000;
    const initialTime = Math.floor(currentTimeFromServer / 1000);
    const [currentTime, setCurrentTime] = useState<number>(initialTime);

    const [remainingTime, setRemainingTime] = useState<IDateFormatInput>(() =>
                                                                             calcDiscountTimeRemaining(initialTime, monthEndTimestamp)
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const updatedTime = calcDiscountTimeRemaining(currentTime, monthEndTimestamp);
        setRemainingTime(updatedTime);
    }, [
                  currentTime,
                  monthEndTimestamp
              ],);

    const formattedRemaining = formatDateWithLeadingZero(remainingTime);

    const remainingTimeCellStyle: string = 'w-[56px] px-1 flex flex-col items-center justify-center';
    const dateTextStyle: string = 'text-body-tiny text-gray-2 leading-[100%] font-normal';
    const timerTextStyle: string = 'text-body-xxl text-white leading-body font-normal';
    const timerColonStyle: string = 'pt-[6px] font-semibold text-gray-2';

    const imageSrc = `/images/test/banners-backgrounds/medium-banners/medium-banner_${bannerBackground}.png`;


    return (
        <div className="w-[424px] h-[536px] relative flex">
            <Image src={imageSrc}
                   alt={imageAlt}
                   priority
                   fill
                   style={{
                       objectFit: 'cover',
                       borderRadius: '8px'
                   }}/>
            <div className="absolute top-[35px] w-full flex flex-col items-center">
                <div className="text-body-small font-medium leading-[100%] text-white">BEST DEALS
                </div>
                <div className="mt-4 text-heading-04 font-semibold leading-heading text-white text-center">
                    Sale of Month
                </div>
                <div className="flex flex-row mt-2">
                    <div className={remainingTimeCellStyle}>
                        <div className={timerTextStyle}>{formattedRemaining.days}</div>
                        <div className={dateTextStyle}>DAYS</div>
                    </div>
                    <div className={timerColonStyle}>:</div>
                    <div className={remainingTimeCellStyle}>
                        <div className={timerTextStyle}>{formattedRemaining.hours}</div>
                        <div className={dateTextStyle}>HOURS</div>
                    </div>
                    <div className={timerColonStyle}>:</div>
                    <div className={remainingTimeCellStyle}>
                        <div className={timerTextStyle}>{formattedRemaining.minutes}</div>
                        <div className={dateTextStyle}>MINS</div>
                    </div>
                    <div className={timerColonStyle}>:</div>
                    <div className={remainingTimeCellStyle}>
                        <div className={timerTextStyle}>{formattedRemaining.seconds}</div>
                        <div className={dateTextStyle}>SECS</div>
                    </div>
                </div>
                <div className="mt-6">
                    <ButtonWithArrow
                        text="Shop Now"
                        size={ButtonWithArrowSize.M}
                        fill={ButtonFillStyle.BORDER}
                    />
                </div>
            </div>
        </div>
    );
};

export default MediumBanner_1;
