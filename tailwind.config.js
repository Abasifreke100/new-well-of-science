/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    screens: {
      sm: "375px",
      md: "744px",
      lg: "1200px",
    },
    extend: {
      colors: {
        green_one: "#547A1F",
        green_two: "#699431",
        green_three: "#5C8526",
        dark_bg: "#121212f2",
        green_bg: "#5C8526",
        footer_bg: "#212121",
        light_text: "#cccccc",
      },
      fontFamily: {
        inter: [`Inter`, `sans-serif`],
        gen_sans: [`General Sans`, `sans-serif`],
      },
    },
  },
  plugins: [],
}
