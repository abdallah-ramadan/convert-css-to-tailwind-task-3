/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: '#ff2c1f',     // اللون الرئيسي
        bg: '#fff',       // لون بيجي
        textMain: '#020307', // لون النصوص
      },
      screens: {
        'xxs': {'max': '300px'},     // @media (max-width: 300px)
        'xs': {'max': '370px'},      // @media (max-width: 370px)
        'sm': {'max': '472px'},  // لتجنب التعارض مع sm الأصلي
        'md': {'max': '774px'},
        'lg': {'max': '991px'},
        'xl': {'max': '1080px'},
      },
    },
  },
  plugins: [],
}
