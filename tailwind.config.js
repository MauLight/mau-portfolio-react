/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        site: 'url(\'./img/site-back.png\')',
      },
      fontFamily: {
        primary: 'Josefin Sans',
        stoke: 'Stoke',
        zen: 'Zen Antique',
        papillon: ['PAPILLON', 'serif'],
        carbon: ['IBM', 'sans-serif'],
        mexica: ['MEXICA', 'sans-serif'],
      }
    },
  },
  plugins: [],
}