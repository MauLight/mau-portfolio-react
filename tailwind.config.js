/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        site: 'url(\'./img/joyBook_02.png\')',
        site2: 'url(\'./img/bg-site.png\')',
      },
      fontFamily: {
        primary: 'Josefin Sans',
        stoke: 'Stoke',
        zen: 'Zen Antique',
        papillon: ['PAPILLON', 'serif'],
        carbon: ['IBM', 'sans-serif'],
        aston: ['ASTON', 'sans-serif'],
        kunika: ['KUNIKA', 'sans-serif'],
        disolve: ['DISOLVE', 'sans-serif'],
        bergen: ['BERGEN', 'sans-serif'],
      }
    },
  },
  plugins: [],
}