/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
    },

    extend: {
      screens: {
        sm: "375px",
        ssml:"573px",
        sml: "640px",
        md: "744px",
        mmd:"768px",
        lg: "1200px",
        mssl:"1000px",
        msl: "1024px",
        customMd:"481px"
      },
      colors: {
        green_one: "#547A1F",
        green_two: "#699431",
        green_three: "#5C8526",
        green_four: "#42690F",
        dark_bg: "#121212f2",
        dark_text: "#121212",
        green_bg: "#5C8526",
        footer_bg: "#212121",
        light_text: "#cccccc",
        light_pink: "#BA2552",
        normal_text: "#333",
        pink: "#C9507A",
      },
      fontFamily: {
        inter: [`Inter`, `sans-serif`],
        gen_sans: [`General Sans`, `sans-serif`],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.4s ease-out",
        "accordion-up": "accordion-up 0.4s ease-out",
      },
      backgroundClip: {
        text: 'text',
      },

    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.bg-clip-text': {
        '-webkit-background-clip': 'text',
        'background-clip': 'text',
      },
      '.text-fill-transparent': {
        'color': 'transparent',
      },
    });
  },],
};
