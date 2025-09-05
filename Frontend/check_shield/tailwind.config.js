module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",   // violet-blue
        secondary: "#FF6584", // pink-red
        accent: "#00C9A7",    // aqua
        dark: "#1F1D36",
        light: "#F8F9FF",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(108, 99, 255, 0.5)",
      },
    },
  },
  plugins: [],
}
