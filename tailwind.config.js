/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00121A',
        secondary: 'rgba(0, 18, 26, 0.5)',
        banner: 'rgba(224, 205, 209, 0.5)'
      }
    },
  },
  plugins: [],
}
