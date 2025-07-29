'use client';

import React from 'react';
import { ClientOnly, ThreeDErrorBoundary } from './ClientOnly';

// Fallback component when 3D fails
const ThreeDFallback = () => (
  <div className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
    {/* Animated background grid */}
    <div className="absolute inset-0 cyberpunk-grid opacity-20"></div>
    
    {/* Floating particles simulation */}
    <div className="absolute inset-0">
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
    
    {/* Loading indicator */}
    <div className="absolute bottom-4 right-4 text-orange-400/60 text-xs font-mono">
      3D Environment Loading...
    </div>
  </div>
);

// Safe 3D Scene component
interface Safe3DSceneProps {
  children: React.ReactNode;
}

export function Safe3DScene({ children }: Safe3DSceneProps) {
  return (
    <ClientOnly fallback={<ThreeDFallback />}>
      <ThreeDErrorBoundary fallback={<ThreeDFallback />}>
        {children}
      </ThreeDErrorBoundary>
    </ClientOnly>
  );
}

export default Safe3DScene;
