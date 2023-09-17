/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Primary colors
                primary: {
                    50: '#FDFDFD',
                    100: '#F9FAFB',
                    200: '#E9F2F7',
                    300: '#D4E4F1',
                    400: '#A3C7E9',
                    500: '#6D9EEB',
                    600: '#4784EA',
                    700: '#286AE0',
                    800: '#1C1438',
                    900: '#1C1438',
                },
                // Secondary colors
                secondary: {
                    50: '#FDF7F7',
                    100: '#FCEEEB',
                    200: '#F6CFD7',
                    300: '#F1A6B4',
                    400: '#E87585',
                    500: '#D73957',
                    600: '#B61B32',
                    700: '#931022',
                    800: '#6D0C18',
                    900: '#4A0A15',
                },
                // Additional colors
                // Add more custom colors as needed
            },
        },
    },
    plugins: [],
};
