export const getEndOfMonthTimestamp = (): number => {
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();
    const endOfMonth = new Date(year, month + 1, 0, 23, 59, 59);
    return endOfMonth.getTime();
};

