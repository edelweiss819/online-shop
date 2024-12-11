export const calcDiscountTimeRemaining = (discountEndTime: number,
                                          currentTimeInSeconds: number) => {
    const differenceInSeconds = discountEndTime - currentTimeInSeconds;

    const data = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    if (differenceInSeconds > 0) {
        data.days = Math.floor(differenceInSeconds / (60 * 60 * 24));
        const remainingAfterDays = differenceInSeconds % (60 * 60 * 24);
        data.hours = Math.floor(remainingAfterDays / (60 * 60));
        const remainingAfterHours = remainingAfterDays % (60 * 60);
        data.minutes = Math.floor(remainingAfterHours / 60);
        data.seconds = remainingAfterHours % 60;
    }

    return data;
};
