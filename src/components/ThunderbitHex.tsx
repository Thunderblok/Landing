import React from 'react';

// Enhanced Thunderbit Hexagon with multi-layer glow effects
const ThunderbitHex: React.FC<{ size?: number; className?: string }> = ({ size = 100, className = '' }) => (
  <svg
    width={size}
    height={size * 1.15}
    viewBox="0 0 100 115"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`animate-pulse-glow ${className}`}
  >
    {/* Main hexagon - Thunderline boundary */}
    <polygon
      points="50,8 93,32 93,82 50,106 7,82 7,32"
      stroke="#9333ea"
      strokeWidth="3"
      fill="rgba(147,51,234,0.10)"
      filter="url(#glow)"
      className="animate-pulse"
    />
    
    {/* Middle layer - CORE boundary */}
    <polygon
      points="50,18 83,37 83,77 50,96 17,77 17,37"
      stroke="#a855f7"
      strokeWidth="2"
      fill="rgba(168,85,247,0.05)"
      filter="url(#glow)"
      className="animate-pulse"
      style={{ animationDelay: '0.5s' }}
    />
    
    {/* Inner layer - Services/Domain */}
    <polygon
      points="50,28 73,42 73,72 50,86 27,72 27,42"
      stroke="#7c3aed"
      strokeWidth="1.5"
      fill="rgba(124,58,237,0.03)"
      filter="url(#glow)"
      className="animate-pulse"
      style={{ animationDelay: '1s' }}
    />

    {/* Central core - Domain/Entities */}
    <circle
      cx="50"
      cy="57"
      r="15"
      stroke="#c084fc"
      strokeWidth="1"
      fill="rgba(192,132,252,0.1)"
      filter="url(#glow)"
      className="animate-pulse"
      style={{ animationDelay: '1.5s' }}
    />

    {/* Honeycomb pattern in center */}
    <g stroke="#d8b4fe" strokeWidth="0.5" fill="none" opacity="0.6">
      <polygon points="45,52 50,49 55,52 55,57 50,60 45,57" />
      <polygon points="40,57 45,54 50,57 50,62 45,65 40,62" />
      <polygon points="50,57 55,54 60,57 60,62 55,65 50,62" />
    </g>

    <defs>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  </svg>
);

export default ThunderbitHex;
