/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary-purple': '#711471',
          'primary-orange': '#f5ab00',
          'light-bg': '#f3f5ff',
          'dark-text': '#333333',
          'light-text': '#666666',
        }
      },
    },
    plugins: [],
  }