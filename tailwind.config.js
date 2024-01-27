/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        radial: "radial-gradient(circle at top left in hsl shorter hue,    #e6d2b4,    #b94315, #a54e48)",
      },
      fontFamily: {
        Orbitron : "Orbitron, sans-serif"
      },
      boxShadow: {
        both : "0px 0px  20px 0px #000, inset 0px 0px 26px 0px #000"
      }
    },
  },
  plugins: [],
};
