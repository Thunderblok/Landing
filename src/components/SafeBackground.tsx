'use client';

import React from 'react';
import { NoSSRWrapper } from './NoSSRWrapper';

/**
 * Safe background component that provides graceful fallbacks
 * for 3D scenes while preventing SSR issues
 */

interface SafeBackgroundProps {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
}

// Enhanced fallback with animated background
const Enhanced3DFallback = ({ className }: { className?: string }) => (
  <div className={`w-full h-full relative overflow-hidden ${className || ''}`}>
    {/* Animated cyberpunk grid background */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-800/80"></div>
    <div className="absolute inset-0 cyberpunk-grid opacity-30 animate-pulse-slow"></div>
    
    {/* Floating particles simulation */}
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 25 }, (_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-orange-400/60 rounded-full animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
    
    {/* Floating hex patterns */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="absolute w-8 h-8 border border-orange-400/30 rotate-45 animate-float"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
    
    {/* Status indicator */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2 text-orange-400/70 text-xs font-mono">
      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
      3D Environment Initializing...
    </div>
  </div>
);

export function SafeBackground({ 
  children, 
  className = "", 
  fallback 
}: SafeBackgroundProps) {
  const defaultFallback = <Enhanced3DFallback className={className} />;
  
  return (
    <NoSSRWrapper fallback={fallback || defaultFallback}>
      <div className={className}>
        {children}
      </div>
    </NoSSRWrapper>
  );
}

export default SafeBackground;