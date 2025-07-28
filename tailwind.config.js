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
        'oko-blue': '#0066ff',
        'oko-purple': '#6633ff',
        'oko-cyan': '#00fff7',
        'oko-magenta': '#ff00e6',
        'oko-yellow': '#ffe600',
        'battlezone': '#00ff00',
        'hud-bg': '#0a0a1a',
        'hud-glow': '#00fff7',
        'hud-dark': '#1a1a2e',
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
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
            borderColor: 'rgba(0, 255, 255, 0.5)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(0, 255, 255, 1)',
            borderColor: 'rgba(0, 255, 255, 1)'
          },
        }
      }
    },
  },
  plugins: [],
}