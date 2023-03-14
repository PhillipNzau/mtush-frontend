/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primaryYellow: '#F7D861',
        primaryGreen: '#2B5B5D',
        secondaryGreen: '#154726',
        orange: '#F1753F',
        textYellow: '#E8AF02'
      },
      fontFamily: {
        'textFont': ['FoundersRegular', 'sans-serif'],
        'headingFont': ['SkModernistRegular', 'serif'],
        'textBold': ['FoundersBold', 'sans-serif'],
        'headingBold': ['SkModernistBold', 'serif'],
      }
    },

  },
  plugins: [
    require("daisyui"),
    require('prettier-plugin-tailwindcss')
  ],
}
