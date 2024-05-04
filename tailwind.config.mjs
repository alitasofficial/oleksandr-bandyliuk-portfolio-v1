import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        text: {
          "main-color": "#000000",
          "secondary-color": "#999999",
        },
        link: {
          DEFAULT: "#0078E8",
          "hover-color": "#CC0100",
          "visited-color": "#B40EB4",
          "pressed-color": "#070304",
        },
        "separator-color": "#D9D9D9",
      },
    },
  },

  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
