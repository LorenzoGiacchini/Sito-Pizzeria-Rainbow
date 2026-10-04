/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-green': '#2E4B3C',
        'brand-terracotta': '#C7523B',
        'brand-yellow': '#E1B04B',
        'brand-ivory': '#F6F1E7',
        'brand-charcoal': '#2B2B2B',
      },
      fontFamily: {
        sans: ['"Montserrat"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Montserrat"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -5px rgba(46, 75, 60, 0.08), 0 4px 6px -2px rgba(46, 75, 60, 0.04)',
        'warm-hover': '0 20px 35px -5px rgba(199, 82, 59, 0.15), 0 8px 10px -3px rgba(46, 75, 60, 0.06)',
      },
    },
  },
  plugins: [],
};
