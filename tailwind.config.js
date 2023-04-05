/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primaryYellow: 'hsl(48, 90%, 67%)',
        primaryGreen: 'hsl(171, 58%, 22%)',
        secondaryGreen: 'hsl(140, 54%, 18% )',
        lightGreen: 'hsla(152, 13%, 64%, 1)',
        orange: 'hsl(18, 86%, 60%)',
        textYellow: 'hsl(45, 98%, 46%)',
        primaryWhite: 'hsl(0, 0%, 100%)',
        primaryBg: 'hsl(39, 67%, 94%)',
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
