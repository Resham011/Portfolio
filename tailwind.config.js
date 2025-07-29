// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//      "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: { background: "#f8f9fa", text: "#212529", primary: "#6a11cb", secondary: "#2575fc", accent: "#8a2be2" },
        dark: { background: "#121212", text: "#e0e0e0", primary: "#8a2be2", secondary: "#6a11cb", accent: "#9333ea" },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        'live-pulse': { '0%, 100%': { transform: 'scale(1)', opacity: '1' }, '50%': { transform: 'scale(1.5)', opacity: '0.5' } }
      },
      animation: {
        'live-pulse': 'live-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};