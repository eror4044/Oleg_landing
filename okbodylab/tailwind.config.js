/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#111111',
        light: '#FFFFFF',
        primary: '#FF7E5F',
        secondary: '#FEB47B',
        accent: '#FFCDB0',
        sand: '#FFF5EB',
        blush: '#FFE7DD',
        slate: '#4E4E4E',
        mist: '#F8F3EF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        cta: '0 12px 30px rgba(255, 126, 95, 0.35)',
        glow: '0 18px 45px rgba(254, 180, 123, 0.32)',
        soft: '0 10px 30px rgba(255, 205, 176, 0.25)',
      },
      backgroundImage: {
        'cta-gradient': 'linear-gradient(120deg, #FF7E5F 0%, #FEB47B 50%, #FFDAB9 100%)',
        'soft-gradient': 'linear-gradient(160deg, #FFF5EB 0%, #FFFFFF 55%, #FFEFE5 100%)',
        sunrise:
          'radial-gradient(circle at 15% 15%, rgba(255, 180, 123, 0.35), transparent 40%), radial-gradient(circle at 85% 20%, rgba(255, 126, 95, 0.25), transparent 45%)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.25s ease-in',
        'bounce-soft': 'bounceSoft 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
