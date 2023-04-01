module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/line-clamp")],
  theme: {
    extend: {
      colors: {
        H_white: "#ffffff",
        H_coffee: "#9C917F",
        H_green: "#537040",
        H_red: "#881337",
        H_text: "#393826",
        H_gray: "#BDBDB5",
        H_brown: "#5D4C3E",
      },
    },
  },
};
