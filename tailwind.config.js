/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primaryYellow: '#F7D861',
        primaryGreen: '#2B5B5D',
        orange: '#F1753F',
        textYellow: '#E8AF02'
      },
      fontFamily: {
        'text': ['FoundersRegular', 'sans-serif'],
        'heading': ['SkModernistRegular', 'serif'],
        'textBold': ['FoundersBold', 'sans-serif'],
        'headingBold': ['SkModernistBold', 'serif'],
      }
    },

  },
  plugins: [],
}
