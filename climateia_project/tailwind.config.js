/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Habilitar el modo oscuro utilizando el atributo 'class'
  theme: {
    extend: {
      colors: {
        text_color_body: "#565656",
        hover_btn: "#301f05",
        text_green: "#48924f",
        background_brown: "#415c2e",
        bkg_dark_mode: "#121212",
        txt_dark_mode:"#FFFFFF",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        sm: "14px", // Small font size
        base: "16px", // Default font size
        lg: "18px", // Large font size
        xl: "20px", // Extra-large font size
        "2xl": "24px", // 2x Extra-large font size
      },
    },
  },
  plugins: [],
};
