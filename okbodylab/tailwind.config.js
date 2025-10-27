/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        coral: '#FF8A80',
        peach: '#FFD4B2',
        mint: '#B7E4C7',
        rose: '#FFE8E0',
        graphite: '#3C3C3C',
        ivory: '#FFF9F5',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        cta: '0 8px 20px rgba(255,138,128,.3)',
      },
    },
  },
  plugins: [],
};
