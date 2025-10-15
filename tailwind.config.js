/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'glow-icon': {
          '0%, 100%': { boxShadow: '0 0 4px rgba(139,92,246,0.3)' },
          '50%': { boxShadow: '0 0 10px rgba(139,92,246,0.5)' },
        },
      },
      animation: {
        'glow-icon': 'glow-icon 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
