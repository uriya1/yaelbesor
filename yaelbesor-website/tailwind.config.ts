import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#6f5347',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e5e3',
          200: '#c6ccc6',
          300: '#a3aca3',
          400: '#7f8a7f',
          500: '#657065',
          600: '#505850',
          700: '#414841',
          800: '#363b36',
          900: '#2e322e',
        }
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
        assistant: ['Assistant', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
