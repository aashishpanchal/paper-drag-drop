/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        img: "url('/bg.jpeg')",
        "paper-img": "url('/paper.webp')",
      },
      fontFamily: {
        Zeyada: "'Zeyada', cursive",
      },
    },
  },
  plugins: [],
};
