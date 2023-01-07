/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'vs-dark': '#1e1e1e',
                'vs-white': '#d4d4d4',
            },
        },
    },
    plugins: [],
}
