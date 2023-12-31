/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Habilitar el modo oscuro utilizando el atributo 'class'
  theme: {
    extend: {
      colors: {
        text_color_body: "#565656",
        white_soft:"#F4F1EC",
        bg_charts:"#FFFDFA",
        bg_charts_dark: "#DBD9D7",
        hover_btn: "#301f05",
        text_green: "#48924f",
        background_brown: "#314223",
        bkg_dark_mode: "#0c181c",
        txt_dark_mode:"#FFFFFF",
        chatbot_bg:"rgba(185, 185, 185, 0.927)",
        bg_form_charts: "#BBCDC3",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xs:"12px",
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
