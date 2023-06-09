/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '639px',
      // => @media (min-width: 640px) { ... }

      'md': '740px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        "100vh": "100vh",
        // By %
        "100%": "100%",
        "90%": "90%",
        "80%": "80%",
        "70%": "70%",
        "60%": "60%",
        "50%": "50%",
        "40%": "40%",
        "30%": "30%",
        "20%": "20%",
        "10%": "10%",
        // By Pixel
        "330px": "330px",
        "300px": "300px",
      },
      colors:{
        "smoothLight": "#ebedf4"
      }
    },
  },
  plugins: [],
}