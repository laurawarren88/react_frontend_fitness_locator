/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        roborto: ['Roborto', 'serif'],
        bebasNeue: ['Bebas Neue', 'sans-serif'],
      },
    colors: {
      vibrantBlue: '#007BFF',
      energeticGreen: '#28A745',
      darkGray: '#2C2C2C',
      lightGray: '#F5F5F5',
      white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}