import { defineConfig } from '@tailwindcss/vite'
import daisyui from 'daisyui'

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        tindev: {
          "primary": "#8D0D0D",
          "secondary": "#1F2937",
          "accent": "#F59E0B",
          "neutral": "#374151",
          "base-100": "#FFFFFF",
          "base-200": "#F9FAFB",
          "base-300": "#E5E7EB",
          "info": "#3B82F6",
          "success": "#10B981",
          "warning": "#F59E0B",
          "error": "#EF4444",
        },
      },
    ],
  },
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
