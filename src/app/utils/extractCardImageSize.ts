export const extractCardImageSize = (className) => {
    const widthMatch = className.match(/w-\[(\d+)px\]/);
    const heightMatch = className.match(/h-\[(\d+)px\]/);

    const width = widthMatch ? parseInt(widthMatch[1], 10) : undefined;
    const height = heightMatch ? parseInt(heightMatch[1], 10) : undefined;

    return {
        width,
        height
    };
};