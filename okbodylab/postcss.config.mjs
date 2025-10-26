/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        coral: '#FF8A80', // Coral Energy (CTA)
        peach: '#FFD4B2', // Peach Glow
        mint: '#B7E4C7', // Mint Balance
        rose: '#FFE8E0', // Soft Rose
        graphite: '#3C3C3C', // Warm Graphite
        ivory: '#FFF9F5' // Ivory White
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.5rem'
      },
      boxShadow: {
        cta: '0 8px 20px rgba(255,138,128,.30)'
      }
    }
  },
  plugins: [],
}