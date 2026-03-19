
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          900: '#0D0D0D', // Dark Charcoal
          800: '#1A1A1A', // Deep Gray
          700: '#2D2D2D',
          600: '#404040',
          500: '#595959',
          400: '#737373',
          300: '#8C8C8C',
          200: '#A6A6A6',
          100: '#BFBFBF',
          50: '#D9D9D9',
        },
        accent: {
          900: '#4A0E01',
          800: '#7A1702',
          700: '#A62103', // Deep maroon
          600: '#D92B04',
          500: '#F23005', // Vibrant Industrial Red
          400: '#F25C05', // Orange
          300: '#F58540',
          200: '#F8AD7B',
          100: '#FCD6B6',
          50: '#FEF0E6',
        },
        neutral: {
          900: '#0D0D0D',
          800: '#1A1A1A',
          700: '#333333',
          500: '#666666',
          300: '#999999',
          100: '#E6E6E6',
          50: '#F2F2F2', // Light Gray
        }
      }
    },
  },
  plugins: [],
}
