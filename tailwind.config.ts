import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#B7B4B4",
        text: "#707070",
        accent: "#F6121C",
        "brand-light-blue": "#6EC1E4",
        "brand-dark-grey": "#54595F",
        "brand-medium-grey": "#7A7A7A",
        "brand-green": "#61CE70",
        "brand-blue": "#4054B2",
        "brand-green-2": "#23A455",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        primary: ["var(--font-quicksand)", "sans-serif"],
        sans: ["var(--font-quicksand)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
