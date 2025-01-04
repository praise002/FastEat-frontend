/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{html,js}", "./assets/js/**/*.js" ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Raleway"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                custom: "#3A9691",
            },
            screens: {
                'xs': {'max': '460px'}, // Custom breakpoint for extra small screens
              },
        },
    },
    plugins: [],
};
