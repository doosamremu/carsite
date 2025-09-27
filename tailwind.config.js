import { defineConfig } from 'tailwindcss';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind scans these files for class names
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  // DaisyUI configuration
  daisyui: {
    themes: ["light", "dark"], // ✅ enables the default light/dark themes
  },
}
