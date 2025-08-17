/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          deep: "#1F299C",     // Deep Blue
          vibrant: "#0466C8",  // Vibrant Blue
        },
        secondary: {
          orange: "#FF9F1C",   // Bright Orange
          charcoal: "#101010", // Charcoal Black
          offwhite: "#F9FAFB", // Soft Off-White
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
