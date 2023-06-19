/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      gradientSize: {
        'ellipse-long': '200% 100%',
      },
      fontFamily: {
        'Lato': ['Lato', 'sans-serif'],
        'Pencil': ['Coming Soon', 'cursive']
      },
      keyframes: {
        toggleLeft: {
          to: { transform: "translate(0)" },
          from: { transform: "translate(2em)" },
        },
        toggleRight: {
          to: { transform: "translate(2em)" },
          from: { transform: "translate(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
        toggleLeft: "toggleLeft 200ms",
        toggleRight: "toggleRight 200ms"
      },
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [],
}