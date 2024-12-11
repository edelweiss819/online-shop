import * as React from 'react';

export interface IDeviderProps {
    width?: number;
    height?: number;
    className?: string;
}

const Divider: React.FC<IDeviderProps> = ({
                                              width = 1,
                                              height = 24,
                                              className
                                          }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 1 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}

    >

        <defs/>
        <line
            id="Devider"
            x1={0.5}
            y1={0}
            x2={0.5}
            y2={24}
            stroke="#CCCCCC"
            strokeOpacity={1}
            strokeWidth={1}
        />
    </svg>
);
export default Divider;
