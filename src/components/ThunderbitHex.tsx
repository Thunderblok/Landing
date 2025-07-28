import React from 'react';

// Animated-ready SVG hexagon (Thunderbit)
const ThunderbitHex: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <polygon
      points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
      stroke="#00FFF7"
      strokeWidth="4"
      fill="#0A0A1A"
      style={{ filter: 'drop-shadow(0 0 8px #00FFF7)' }}
    />
    <circle
      cx="50"
      cy="50"
      r="18"
      fill="#00FFF7"
      opacity="0.15"
    />
  </svg>
);

export default ThunderbitHex;
