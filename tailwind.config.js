/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
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
        green_four: "#6fa22d",
        dark_bg: "#121212f2",
        dark_text: "#121212",
        green_bg: "#5C8526",
        footer_bg: "#212121",
        light_text: "#cccccc",
        light_pink: "#BA2552",
      },
      fontFamily: {
        inter: [`Inter`, `sans-serif`],
        gen_sans: [`General Sans`, `sans-serif`],
      },
    },
  },
  plugins: [],
}
