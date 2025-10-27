// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0052C9',   // 0052C9
          accent: '#FEEA3A',    // FEEA3A
          accent2: '#ECBD34',   // ECBD34
          dark: '#212121',      // 212121
          light: '#F9F9F9',     // F9F9F9
        },
      },
      boxShadow: {
        'soft': '0 6px 20px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [],
}
export default config