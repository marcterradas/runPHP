module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'vs-dark': '#1e1e1e',
                'vs-white': '#d4d4d4'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
