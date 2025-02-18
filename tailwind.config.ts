import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        matter: ['Matter', 'sans-serif'], // Add Matter font
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        black: '900',
      },
      colors: {
        azText: '#131518',
        azTextLightGray: '#64748B'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(10.94deg, #131518 8.1%, #2D2D2D 93.73%)'
      },
      opacity: {
        90: '0.9',
        80: '0.8',
        70: '0.7',
        60: '0.6',
        50: '0.5',
        40: '0.4',
        30: '0.3',
        20: '0.2',
        10: '0.1',
      },
    },
  },
  plugins: [],
} satisfies Config;
