/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        highTower: ['High-Tower', 'sans-serif'],
        interTight: ['Inter Tight', 'sans-serif'],
      }
    },
  },
  plugins: [],
}