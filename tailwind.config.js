const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts}',
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue'
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            // current: 'currentColor',
            black: colors.black,
            white: colors.white,
            blue: '#21242E',
            contrast: `#7B7365`,
            faint: '#f4f2f0',
            light: '#F0ECE6',
            lighter: '#e6dcca',
            orange: '#ba7d12'

        },
        extend: {
            fontFamily: {
                primary: ['"Baskervville"', "serif"],
                secondary: ['"Jost"', "serif"],
                cursive: ['"Prata"', "serif"],
                cormorant: ['"Cormorant"', "serif"]
            },
            backgroundImage: {
                'faint-logo': "url('~/public/img/alicia-peters-logo-faint.png')",
            }
        }
    }
}