/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1/4': '25%',
        '1/2': '300px',
        '3/4': '75%',
        '90/1': '90%',
      }, 
      maxHeight: {
        '1/4': '25%',
        '1/2': '300px',
        '3/4': '75%',
        '90/1': '90%',
      }
    },
  },
  plugins: [],
}
