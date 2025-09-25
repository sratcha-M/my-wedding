import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "wedding-gradient":
          "linear-gradient(to bottom, white, #faf2e9 30%, #e8f0df 60%, #827c66 100%)",
      },
      colors: {
        primary: "#ff4d6d",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
