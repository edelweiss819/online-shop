'use client'
import React from 'react';
import {IDateFormatOutput} from '@/app/shared/utils';

export interface IOfferEndsBlockProps {
    endTime: IDateFormatOutput;
}

const OfferEndsBlock: React.FC<IOfferEndsBlockProps> = ({endTime}) => {
    const remainingTimeCellStyle = 'w-[60px] flex flex-col items-center justify-center';
    const dateTextStyle = 'text-[10px] text-gray-4 leading-[100%] font-medium';
    const timerTextStyle = 'text-body-large text-gray-9 leading-body font-medium';
    const timerColonStyle = 'pt-1 font-semibold';

    return (
        <>
            <div
                className={'w-full inline-flex flex-col items-center justify-center mt-[18px] mb-6'}>
                <div
                    className={'text-gray-4 text-body-small font-normal leading-[18px]'}>
                    Hurry up! Offer ends In:
                </div>
                <div className={'flex flex-row mt-3'}>
                    <div className={remainingTimeCellStyle}>
                        <div className={timerTextStyle}>
                            {endTime.days}
                        </div>
                        <div
                            className={dateTextStyle}>
                            DAYS
                        </div>
                    </div>
                    <div className={remainingTimeCellStyle}>
                        <div className={timerTextStyle}>
                            {endTime.hours}
                        </div>
                        <div className={dateTextStyle}>
                            HOURS
                        </div>
                    </div>
                    <div className={timerColonStyle}>
                        :
                    </div>
                    <div className={remainingTimeCellStyle}>
                        <div className={timerTextStyle}>
                            {endTime.minutes}
                        </div>
                        <div className={dateTextStyle}>
                            MINUTES
                        </div>
                    </div>
                    <div className={timerColonStyle}>
                        :
                    </div>
                    <div className={remainingTimeCellStyle}>
                        <div className={timerTextStyle}>
                            {endTime.seconds}
                        </div>
                        <div className={dateTextStyle}>
                            SECS
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OfferEndsBlock;
