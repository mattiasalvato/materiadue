/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        t: {
          DEFAULT: '#C97055', // Terracotta
          light: '#D98B6E',   // Terracotta Light
          deep: '#A0503A',    // Terracotta Deep
        },
        s: {
          DEFAULT: '#3D4F63', // Slate
          light: '#5A6E83',   // Slate Light
        },
        brand: {
          page: '#111820',    // Background primario
          dark: '#161E28',    // Dark cards / hero
          mid: '#1F2C3A',     // Card secondarie / mid
          cream: '#F5F2EE',
          off: '#FAF8F5',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}