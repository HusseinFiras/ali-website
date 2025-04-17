/** @type {import('tailwindcss').Config} */
export default {
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
        },
        borderRadius: {
          'card': '1rem',
        },
        boxShadow: {
          'card': '0 10px 30px rgba(0, 0, 0, 0.1)',
          'hover': '0 15px 40px rgba(0, 0, 0, 0.15)',
        },
      },
    },
    plugins: [],
  }