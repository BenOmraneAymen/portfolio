/** @type {import('tailwindcss').Config} */

const plugins = require('tailwindcss/plugin')



const rotateY = plugins(({ addUtilities }) => {
  addUtilities({
    '.rotate-y-360': {
      transform: 'rotateY(360deg)',
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.rotate-y-90': {
      transform: 'rotateY(90deg)',
    },
    '.rotate-y-45': {
      transform: 'rotateY(45deg)',
    },
  })
})

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      width: {
        '86': '22rem',
        '92': '23rem',
        '98': '24rem',
        '100': '26rem',
        '110': '28rem',
        '120': '30rem',
        '130': '32rem',
        '140': '34rem',
        '150': '36rem',
        '160': '38rem',
        '170': '40rem',
        '180': '42rem',
        '190': '44rem',
        '200': '46rem',
        '210': '48rem',
        '1/10': '10%',
        '3/10': '30%',
        '7/10': '70%',
        '9/10': '90%',
      },
      height: {
        '100': '26rem',
        '110': '28rem',
        '120': '30rem',
        '130': '32rem',
        '140': '34rem',
        '150': '36rem',
        '160': '38rem',
        '170': '40rem',
        '180': '42rem',
        '190': '44rem',
        '200': '46rem',
        '210': '48rem',
        '1/10': '10%',
        '3/10': '30%',
        '7/10': '70%',
        '9/10': '90%',
        'screen-1/2': '50vh',
        'screen-2/3': '66.66vh',
      },
      colors: {
        'primary': '#1e40af',
        'secondary': '#38bdf8',
      },
      screens: {
        'xs': '475px',
      },
      aspectRatio: {
        '1/1': [1, 1],
        '16/9': [16, 9],
      },
      fontSize:{
        'xxs': '.5rem',
      }
    },
  },
  plugins: [rotateY],
}

