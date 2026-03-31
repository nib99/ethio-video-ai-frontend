import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ethio: {
          red: "#FF4500",
          orange: "#FFA500",
          gold: "#FFD700",
        },
      },
      fontFamily: {
        ethio: ['Noto Sans Ethiopic', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'ethio-gradient': 'linear-gradient(90deg, #FF4500, #FF8C00, #FFA500)',
      },
    },
  },
  plugins: [],
};

export default config;
