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
        spaceBlack: "#0b0c10",
        cosmicBlue: "#0f4c81",
        nebulaPurple: "#9b59b6",
        starYellow: "#f1c40f",
        glowBlue: "#3498db",
      },
      boxShadow: {
        "glow-blue": "0 0 15px #3498db",
        "glow-yellow": "0 0 15px #f1c40f",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(5px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite', // Adjust the duration and easing for smooth effect
      },
    },
  },
  plugins: [],
};
export default config;
