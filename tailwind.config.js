/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#b04609", // Así puedes usar class="text-brand" o "bg-brand"
      },
    },
  },
  plugins: [],
};
