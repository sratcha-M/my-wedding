// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <== ต้องมี
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [{ pattern: /bg-\[url\(.*\)\]/ }],
};
