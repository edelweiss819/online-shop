export default function calcSliderWidthAndShift(gapWidth: number,
                                                gapCount: number,
                                                itemWidth: number,
                                                itemsPerIteration: number,
                                                iterationCount: number,
): {
    sliderWidth: number;
    sliderShift: number;
} {
    const oneIterationGapCount = gapCount + 1;
    const totalOneIterationGapWidth = gapWidth * oneIterationGapCount;
    const oneIterationSliderWidth = itemWidth ? itemWidth * itemsPerIteration + totalOneIterationGapWidth : 0;
    const sliderWidth = oneIterationSliderWidth * iterationCount;
    const sliderShift = itemWidth ? (iterationCount - 1) * oneIterationSliderWidth : 0;

    return {
        sliderWidth,
        sliderShift,
    }
}
