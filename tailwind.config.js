/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'highlight': '#930123',
      },
      aspectRatio: {
        'vertical': '3/4'
      }
    },
  },
  plugins: [],
}

