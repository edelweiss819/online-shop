import {IDateFormatInput} from '@/app/shared/utils/format-date-with-leading-zero';

export const convertTimestampToDate = (timeInSeconds: number): IDateFormatInput => {
    const days = Math.floor(timeInSeconds / (60 * 60 * 24));
    const remainingAfterDays = timeInSeconds % (60 * 60 * 24);
    const hours = Math.floor(remainingAfterDays / (60 * 60));
    const remainingAfterHours = remainingAfterDays % (60 * 60);
    const minutes = Math.floor(remainingAfterHours / 60);
    const seconds = remainingAfterHours % 60;

    return {
        days,
        hours,
        minutes,
        seconds
    };
};
