/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Open Sans", "sans-serif"],
      },
      maxWidth: {
        'container': '1536px',
      },
      colors: {
        'primary': '#fff',
        'secondary': '#000',
        'shadow': '4px 4px 4px 4px rgba(0.25, 0.25, 0.25, 0.25);'
      },
    },
  },
  plugins: [],
}