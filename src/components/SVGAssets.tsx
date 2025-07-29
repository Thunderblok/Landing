import React from 'react';

// SVG Asset Interface for Modular Components
interface SVGAssetProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

// Main Hexagonal Logo Components
export const OKOHex: React.FC<SVGAssetProps> = ({ width = 48, height = 48, className = "", color = "#FB9260" }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Placeholder - will be replaced with actual SVG from art team */}
    <path d="M24 2L36 10V26L24 34L12 26V10L24 2Z" stroke={color} strokeWidth="2" fill={`${color}20`} />
    <text x="24" y="28" textAnchor="middle" fill={color} fontSize="8" fontFamily="monospace">OKO</text>
  </svg>
);

export const ThunderlineHex: React.FC<SVGAssetProps> = ({ width = 48, height = 48, className = "", color = "#3B82F6" }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Placeholder - will be replaced with actual SVG from art team */}
    <path d="M24 2L36 10V26L24 34L12 26V10L24 2Z" stroke={color} strokeWidth="2" fill={`${color}20`} />
    <path d="M20 14L28 14L26 20L30 20L18 32L20 24L16 24L20 14Z" fill={color} />
  </svg>
);

export const ThunderblockHex: React.FC<SVGAssetProps> = ({ width = 48, height = 48, className = "", color = "#22C55E" }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Placeholder - will be replaced with actual SVG from art team */}
    <path d="M24 2L36 10V26L24 34L12 26V10L24 2Z" stroke={color} strokeWidth="2" fill={`${color}20`} />
    <rect x="16" y="14" width="4" height="4" fill={color} />
    <rect x="22" y="14" width="4" height="4" fill={color} />
    <rect x="28" y="14" width="4" height="4" fill={color} />
    <rect x="16" y="20" width="4" height="4" fill={color} />
    <rect x="22" y="20" width="4" height="4" fill={color} />
    <rect x="28" y="20" width="4" height="4" fill={color} />
    <rect x="16" y="26" width="4" height="4" fill={color} />
    <rect x="22" y="26" width="4" height="4" fill={color} />
    <rect x="28" y="26" width="4" height="4" fill={color} />
  </svg>
);

export const ThunderbitHex: React.FC<SVGAssetProps> = ({ width = 48, height = 48, className = "", color = "#9333EA" }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Placeholder - will be replaced with actual SVG from art team */}
    <path d="M24 2L36 10V26L24 34L12 26V10L24 2Z" stroke={color} strokeWidth="2" fill={`${color}20`} />
    <circle cx="24" cy="18" r="3" fill={color} />
    <circle cx="18" cy="24" r="2" fill={`${color}80`} />
    <circle cx="30" cy="24" r="2" fill={`${color}80`} />
    <circle cx="24" cy="30" r="2" fill={`${color}80`} />
    <path d="M24 18L18 24M24 18L30 24M24 18L24 30" stroke={color} strokeWidth="1" />
  </svg>
);

// Particle and Connection Elements
export const ParticleHex: React.FC<SVGAssetProps> = ({ width = 8, height = 8, className = "", color = "#FB9260" }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 0L6 2V4L4 6L2 4V2L4 0Z" fill={color} />
  </svg>
);

export const NodeConnector: React.FC<SVGAssetProps> = ({ width = 16, height = 16, className = "", color = "#FB9260" }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L12 4V8L8 11L4 8V4L8 1Z" stroke={color} strokeWidth="1" fill="none" />
    <circle cx="8" cy="6" r="2" fill={color} />
  </svg>
);

export const DataFlowArrow: React.FC<SVGAssetProps> = ({ width = 24, height = 12, className = "", color = "#3B82F6" }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6H18M18 6L14 2M18 6L14 10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Dashboard UI Elements
export const DataBar: React.FC<SVGAssetProps & { height?: number; fillPercent?: number }> = ({ 
  width = 24, 
  height = 100, 
  className = "", 
  color = "#3B82F6", 
  fillPercent = 75 
}) => (
  <svg width={width} height={height} className={className} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width={width-4} height={height-4} stroke={color} strokeWidth="1" fill="none" />
    <rect x="4" y={height - (height-8) * (fillPercent/100) - 4} width={width-8} height={(height-8) * (fillPercent/100)} fill={color} />
  </svg>
);

export const ProgressRing: React.FC<SVGAssetProps & { progress?: number }> = ({ 
  width = 48, 
  height = 48, 
  className = "", 
  color = "#22C55E", 
  progress = 75 
}) => {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r={radius} stroke={`${color}30`} strokeWidth="4" fill="none" />
      <circle 
        cx="24" 
        cy="24" 
        r={radius} 
        stroke={color} 
        strokeWidth="4" 
        fill="none"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-90 24 24)"
        strokeLinecap="round"
      />
      <text x="24" y="28" textAnchor="middle" fill={color} fontSize="10" fontFamily="monospace">{progress}%</text>
    </svg>
  );
};

export const StatusDot: React.FC<SVGAssetProps & { status?: 'active' | 'inactive' | 'warning' | 'error' }> = ({ 
  width = 12, 
  height = 12, 
  className = "", 
  status = 'active' 
}) => {
  const statusColors = {
    active: '#22C55E',
    inactive: '#6B7280',
    warning: '#FB9260',
    error: '#EF4444'
  };
  
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="5" fill={statusColors[status]} />
      <circle cx="6" cy="6" r="3" fill={statusColors[status]} fillOpacity="0.6" />
    </svg>
  );
};

// Export all components for easy importing
export const SVGAssets = {
  OKOHex,
  ThunderlineHex,
  ThunderblockHex,
  ThunderbitHex,
  ParticleHex,
  NodeConnector,
  DataFlowArrow,
  DataBar,
  ProgressRing,
  StatusDot
};

export default SVGAssets;
