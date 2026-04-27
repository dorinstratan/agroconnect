/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50:  '#E1F5EE',
          100: '#9FE1CB',
          400: '#1D9E75',
          600: '#0F6E56',
          900: '#04342C',
        },
        earth: {
          50:  '#FAF8F3',
          100: '#F2EDE3',
          400: '#7A7060',
          700: '#5A4A32',
          900: '#2C2416',
        },
        amber: {
          400: '#EF9F27',
          600: '#854F0B',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans:  ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
