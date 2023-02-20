/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primaryYellow: '#F7D861',
        primaryGreen: '#2B5B5D',
        orange: '#F1753F',
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
