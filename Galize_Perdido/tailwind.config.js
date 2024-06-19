/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: {
          500: "#00EE82"
        },
        customBlack: {
          500: "#292A2E"
        }
      }
    },
    keyframes: {
      'scale-up-ver-center': {
        '0%': {
          transform: 'scaleY(0.4)',
        },
        '100%': {
          transform: 'scaleY(1)',
        },
      },
    },
    animation: {
      'scale-up-ver-center': 'scale-up-ver-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
    },
  },
  plugins: [],
}

