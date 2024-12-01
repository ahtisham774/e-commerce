/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",


"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-1":"#ED1270",
        "light-gray":"#F5F5F5",
        "secondary-1":"#1AB7EA",
      }
    },
  },
  plugins: [],
}

