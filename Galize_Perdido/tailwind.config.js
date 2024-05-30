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
  },
  plugins: [],
}

