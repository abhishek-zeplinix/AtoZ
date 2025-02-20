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
      keyframes: {
        "frame-contact-me-btn-icon": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },

        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "animate-frame-contact-me-btn-icon":
          "frame-contact-me-btn-icon .3s ease",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        'spin-slow': 'spin 5s linear infinite',
        "wave": 'wave 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
