/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'oko-purple': '#9333ea',
        'oko-purple-light': '#a855f7',
        'oko-purple-dark': '#7c3aed',
        'oko-purple-faint': '#e9d5ff',
        'battlezone': '#9333ea',
        'hud-bg': '#000000',
        'hud-glow': '#9333ea',
        'hud-dark': '#000000',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'hex-glow': 'hex-glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'hex-glow': {
          '0%': { 
            boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)',
            borderColor: 'rgba(147, 51, 234, 0.5)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(147, 51, 234, 1)',
            borderColor: 'rgba(147, 51, 234, 1)'
          },
        }
      }
    },
  },
  plugins: [],
}