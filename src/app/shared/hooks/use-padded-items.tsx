import {useMemo, useCallback} from 'react';

export const usePaddedItems = <T, >(array: T[], paddedTo: number): T[] => {
    const getPaddedArray = useCallback(() => {
        const remainder = array.length % paddedTo;
        if (remainder !== 0) {
            const additionalItems = paddedTo - remainder;
            const itemsToAdd = array.slice(0, additionalItems);
            return [
                ...array,
                ...itemsToAdd,
            ];
        } else {
            return array;
        }
    }, [
                                           array,
                                           paddedTo
                                       ]);

    const paddedArray = useMemo(() => getPaddedArray(), [getPaddedArray]);

    return paddedArray;
};
