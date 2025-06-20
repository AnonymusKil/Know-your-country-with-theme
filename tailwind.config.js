// tailwind.config.js
export default {
  darkMode: 'class', // 👈 enable dark mode via a class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightmode: "hsl(0, 0%, 99%)",
        darkmode: "hsl(207, 26%, 17%)", // 🌑 add this dark bg
        lighttext: "hsl(200, 15%, 8%)",
        darktext: "hsl(0, 0%, 100%)"
      },
    },
  },
  plugins: [],
}
