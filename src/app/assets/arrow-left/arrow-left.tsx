import * as React from 'react';
import {ArrowButtonProps} from '@/app/shared/ui/arrow-button/arrow-button';


export type ArrowLeftProps = Partial<ArrowButtonProps>;

const ArrowLeft: React.FC<ArrowLeftProps> = ({
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
                r={22.5}
                transform="matrix(-1 0 0 1 22.5 22.5)"
                fill={circleColor}
                fillOpacity={1}
            />

            <path
                id="Vector"
                d="M14.25 22.22L29.25 22.22"
                stroke={arrowColor}
                strokeOpacity={1}
                strokeWidth={1.5}
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <path
                id="Vector"
                d="M20.29 16.2L14.25 22.22L20.29 28.25"
                stroke={arrowColor}
                strokeOpacity={1}
                strokeWidth={1.5}
                strokeLinejoin="round"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default ArrowLeft;
