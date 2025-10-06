import { defineConfig } from '@tailwindcss/vite'

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anonymous': ['Anonymous Pro', 'monospace'],
        'fredoka': ['Fredoka', 'sans-serif'],
      },
      colors: {
        'primary': '#8D0D0D',
      },
      spacing: {
        '30': '7.5rem',
      }
    },
  },
})
