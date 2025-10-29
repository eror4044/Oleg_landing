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
        dark: '#0E0E0E',          // фоновый почти чёрный, мягкий
        light: '#FFF9F5',         // тёплый белый
        graphite: '#1C1C1C',      // глубокий фон блоков
        primary: '#FBAE58',       // янтарно-золотой (основной CTA)
        accent: '#E7681F',        // апельсиново-оранжевый (внимание)
        secondary: '#FFB89F',     // нежный персиково-розовый
        glow: '#FFD8B0',          // световой эффект
        muted: '#FFE8D9',         // текст на тёмном фоне
      },
      boxShadow: {
        cta: '0 8px 25px rgba(251,174,88,0.4)',
        glow: '0 0 30px rgba(231,104,31,0.35)',
        soft: '0 4px 12px rgba(251,174,88,0.25)',
      },
      backgroundImage: {
        'cta-gradient': 'linear-gradient(135deg, #E7681F, #FBAE58)',
        'accent-glow': 'radial-gradient(circle at 50% 50%, rgba(251,174,88,0.25), transparent 70%)',
      },
    },
  },
  plugins: [],
};
