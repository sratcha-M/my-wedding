import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "416px",
      },
      backgroundImage: {
        "wedding-gradient":
          "linear-gradient(to bottom, white, #faf2e9 30%, #e8f0df 60%, #827c66 100%)",
      },
      colors: {
        primary: "#ff4d6d",
      },
      fontFamily: {
        sans: ["Mitr", "ui-sans-serif", "system-ui", "sans-serif"], // 👈 ตั้ง Mitr เป็น default
      },
    },
  },
  plugins: [],
} satisfies Config;
