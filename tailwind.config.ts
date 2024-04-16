import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      mytheme: {
        // custom theme
        extend: "dark",
        colors: {
          background: "rgb(14, 14, 14)",
          foreground: "#FFFFFF",
          content1: "#1E2827",
          primary: {
            "50": "#FFFFFF",
            "100": "#FFFFFF",
            DEFAULT: "#000000",
            foreground: "#000000",
          },
        },
      },
      mythemeLit: {
        // custom theme
        extend: "light",
        colors: {
          background: "#FBFBFB",
          foreground: "#141414",
          content1: "#1E2827",
          content2: "rgba(20, 20, 20, 0.5)",
        },
      },
  },
  })],
};
export default config;
