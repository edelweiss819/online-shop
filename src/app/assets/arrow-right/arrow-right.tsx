import * as React from 'react';
import {ArrowButtonProps} from '@/app/shared/ui/arrow-button/arrow-button';

export type ArrowRightProps = Partial<ArrowButtonProps>;

const ArrowRight: React.FC<ArrowRightProps> = ({
                                                   className,
                                                   onClick
                                               }) => {

    const [isHover, setHover] = React.useState(false);


    let circleColor = isHover ? '#00B207' : '#FFFFFF';
    let arrowColor = isHover ? '#FFFFFF' : '#1A1A1A';

    return (
        <svg
            width={45}
            height={45}
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className={className}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
        >
            <defs/>
            <circle
                id="Container"
                cx={22.5}
                cy={22.5}
                r={22.5}
                fill={circleColor}
                fillOpacity={1}
            />
            <path
                id="Vector"
                d="M30.75 22.22L15.75 22.22"
                stroke={arrowColor}
                strokeOpacity={1}
                strokeWidth={1.5}
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <path
                id="Vector"
                d="M24.7 16.2L30.75 22.22L24.7 28.25"
                stroke={arrowColor}
                strokeOpacity={1}
                strokeWidth={1.5}
                strokeLinejoin="round"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default ArrowRight;
