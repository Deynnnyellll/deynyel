/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto' : 'sans-serif'
      },
      colors: {
        darkOne: '#14110f',
        darkTwo: '#34312d',
        lightOne: '#3dd6d0',
        primary: '#864af9'
      },
      keyframes: {
        rotate3d : {
          "0%" : {
            transform: "rotateY(8deg)"
          },
          "50%": {
            transform: "rotateY(0deg)"
          },
          "100%": {
            transform: "rotateY(-8deg)"
          }
        }
      },
      animation: {
        slowBounce : 'bounce 1s ease-in-out infinite',
        rotate3d: "rotate3d 1.5s linear infinite"
      }
    },
  },
  plugins: [],
}