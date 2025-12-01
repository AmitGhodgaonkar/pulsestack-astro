// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: 'class', // Toggles dark mode when the 'dark' class is present
  theme: {
    extend: {},
  },
  plugins: [],
}
