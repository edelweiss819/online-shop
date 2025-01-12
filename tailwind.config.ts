import type {Config} from 'tailwindcss';


const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                'soft-primary': 'var(--soft-primary)',
                'hard-primary': 'var(--hard-primary)',
                warning: 'var(--warning)',
                danger: 'var(--danger)',
                white: 'var(--white)',
                blue: 'var(--blue)',
                yellow: 'var(--yellow)',
                gray: {
                    9: 'var(--gray-9)',
                    8: 'var(--gray-8)',
                    7: 'var(--gray-7)',
                    6: 'var(--gray-6)',
                    5: 'var(--gray-5)',
                    4: 'var(--gray-4)',
                    3: 'var(--gray-3)',
                    2: 'var(--gray-2)',
                    1: 'var(--gray-1)',
                    0.5: 'var(--gray-0_5)',
                    'secondary': `var(--gray-secondary)`,
                },
                'green-gray': {
                    9: 'var(--green-gray-9)',
                    8: 'var(--green-gray-8)',
                    7: 'var(--green-gray-7)',
                    6: 'var(--green-gray-6)',
                    5: 'var(--green-gray-5)',
                    4: 'var(--green-gray-4)',
                    3: 'var(--green-gray-3)',
                    2: 'var(--green-gray-2)',
                    1: 'var(--green-gray-1)',
                    0.5: 'var(--green-gray-0_5)',
                },
                green: {
                    ghost: 'var(--green-ghost)',
                    'ghost-hover': 'var(--green-ghost-hover)',
                },
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            fontSize: {
                'heading-01': '72px',
                'heading-02': '56px',
                'heading-03': '48px',
                'heading-04': '40px',
                'heading-05': '36px',
                'heading-06': '32px',
                'display-01': '72px',
                'display-02': '56px',
                'display-03': '48px',
                'display-04': '40px',
                'display-05': '36px',
                'display-06': '32px',
                'body-xxl': '24px',
                'body-xl': '20px',
                'body-large': '18px',
                'body-medium': '16px',
                'body-small': '14px',
                'body-tiny': '12px',
            },
            lineHeight: {
                heading: '120%',
                body: '150%',
                '130': '1.3'
            },
            boxShadow: {
                'card-standard': '0px 0px 12px 0px var(--hard-primary)',
                'feature-shadow': `0px 8px 40px 0px rgba(0, 38, 3, 0.08)`,
            },
            width: {
                'base-width': `var(--base-width)`,
            },
            maxWidth: {
                'base-width': `var(--base-width)`,
            },
            backgroundImage: {
                'big-banner-gradient': `var(--big-banner-gradient)`
            },
            screens: {
                xs: '480px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1360px',
            },
        },

    },
    plugins: [],
};

export default config;
