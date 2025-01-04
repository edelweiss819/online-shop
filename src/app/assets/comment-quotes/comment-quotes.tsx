import * as React from 'react';

export type CommentQuotesProps = {
    className?: string;
}
const CommentQuotes: React.FC<CommentQuotesProps> = ({className}) => (
    <svg
        width={32}
        height={26}
        viewBox="0 0 32 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}
        style={{color: 'var(--primary)'}}
    >
        <defs/>
        <g opacity={0.3}>
            <path
                id="Vector"
                d="M23.82 0C20.43 0 17.68 2.65 17.68 5.93C17.68 9.2 20.43 11.86 23.82 11.86C29.64 11.86 26.26 22.17 18.93 23.24C18.58 23.29 18.26 23.45 18.04 23.7C17.81 23.95 17.68 24.27 17.68 24.6C17.68 25.44 18.48 26.11 19.37 25.98C32.71 24.08 37.45 0 23.82 0L23.82 0ZM6.13 0C2.74 0 0 2.65 0 5.93C0 9.2 2.74 11.86 6.13 11.86C11.95 11.86 8.58 22.17 1.24 23.24C0.9 23.29 0.58 23.45 0.35 23.7C0.12 23.95 0 24.27 0 24.6C0 25.44 0.8 26.1 1.68 25.98C15.02 24.08 19.77 0 6.13 0Z"
                fill="currentColor"
                fillOpacity={1}
                fillRule="evenodd"
            />
        </g>
    </svg>
);
export default CommentQuotes;
