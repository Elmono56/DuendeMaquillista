import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pink-lighter': '#ffef6',
        'gray-input': '#d1d5db',
        'hover-pink': '#ed8f8f',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['Playfair Display', 'sans-serif'], // Aquí la estamos estableciendo como predeterminada
        'playfair': ['Playfair Display'],
      },
    },
  },
  plugins: [],
}

export default config;