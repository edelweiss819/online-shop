export interface IDateFormatInput {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export interface IDateFormatOutput {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

export const formatDateWithLeadingZero = ({
                                              days,
                                              hours,
                                              minutes,
                                              seconds,
                                          }: IDateFormatInput): IDateFormatOutput => {
    return {
        days: days < 10 ? `0${days}` : `${days}`,
        hours: hours < 10 ? `0${hours}` : `${hours}`,
        minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
        seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
    };
};
