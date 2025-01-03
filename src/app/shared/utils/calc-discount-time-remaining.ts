import {convertTimestampToDate} from '@/app/shared/utils/convert-timestamp-to-date';

export const calcDiscountTimeRemaining = (
    currentTimeInSeconds: number,
    discountEndTime?: number
) => {
    if (discountEndTime) {
        const differenceInSeconds = discountEndTime - currentTimeInSeconds;
        return differenceInSeconds > 0
            ? convertTimestampToDate(differenceInSeconds)
            : {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
    }

    return convertTimestampToDate(currentTimeInSeconds);
};
