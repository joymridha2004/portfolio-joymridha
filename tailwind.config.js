/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'Sora' : ['Sora', 'sans-serif'],
      },
      screens: {
        'sm': '480px', // phone
        'md': '768px', // tablet
        'lg': '1100px',// laptop
        'xl': '1440px' // desktop
      },
      container : {
        center : true
      },
      colors : {
        "body-color" : '#fafafa',
        "title-color": '#333333',
        "title-color-dark" : '#000000',
        "text-color" : '#757575'
      },
      //animation for gradient button
      animation: {
        border: 'border 4s ease infinite',
        waving: 'waving 2s ease-in-out infinite',
      },
      // keyframes for gradient button
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}