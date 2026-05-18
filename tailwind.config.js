/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#33eeff',
          DEFAULT: '#00e5ff',
          dark: '#00b8cc'
        },
        dark: {
          bg: '#0f0a19',
          surface: '#181125',
          border: '#2a1f3d'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
