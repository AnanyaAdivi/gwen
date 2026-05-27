/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        merriweather: ["Merriweather", "serif"],
      },
      colors: {
        dark: "#0a0f1c",
        gold: "#c9a03d",
        parchment: "#f5e7d3",
        emerald: "#1e4a3b",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "float": "float 3s infinite ease-in-out",
        "twinkle": "twinkle 2s infinite",
        "glow": "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        float: { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-10px)" } },
        twinkle: { "0%, 100%": { opacity: 0.2 }, "50%": { opacity: 1 } },
        glow: { "0%, 100%": { textShadow: "0 0 5px #c9a03d" }, "50%": { textShadow: "0 0 20px #c9a03d" } },
      },
    },
  },
  plugins: [],
};