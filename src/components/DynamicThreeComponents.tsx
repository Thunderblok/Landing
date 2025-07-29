'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { React18ThreeErrorBoundary, useThreeErrorHandler } from './React18ThreeErrorBoundary';

/**
 * Dynamic imports for all Three.js components to ensure they never run during SSR
 * This completely prevents ReactCurrentBatchConfig errors during build/export
 * Enhanced for React 18 compatibility
 */

// Enhanced fallback component with error boundary
const ThreeDFallback = () => (
  <div className="w-full h-full bg-gradient-to-b from-slate-900/50 to-slate-800/50 relative overflow-hidden">
    <div className="absolute inset-0 cyberpunk-grid opacity-30 animate-pulse-slow"></div>
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 15 }, (_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-orange-400/60 rounded-full animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
    <div className="absolute bottom-4 right-4 text-orange-400/60 text-xs font-mono animate-pulse">
      3D Environment Loading...
    </div>
  </div>
);

// Error boundary wrapper for Three.js components with React 18 compatibility
const ThreeDErrorWrapper = ({ children }: { children: React.ReactNode }) => {
  useThreeErrorHandler(); // Hook for additional error handling
  
  return (
    <React18ThreeErrorBoundary>
      <Suspense fallback={<ThreeDFallback />}>
        {children}
      </Suspense>
    </React18ThreeErrorBoundary>
  );
};

// Dynamically imported 3D components with SSR completely disabled and React 18 optimizations
export const DynamicParticle3DScene = dynamic(
  () => import('./Particle3DScene').then(mod => ({ default: mod.Particle3DScene })),
  {
    ssr: false,
    loading: () => <ThreeDFallback />
  }
);

// Wrap the component for additional safety
export const SafeDynamicParticle3DScene = (props: any) => (
  <ThreeDErrorWrapper>
    <DynamicParticle3DScene {...props} />
  </ThreeDErrorWrapper>
);

export const DynamicWebGLSuperhexScene = dynamic(
  () => import('./WebGLSuperhexScene').then(mod => ({ default: mod.WebGLSuperhexScene })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-gradient-to-b from-slate-900/50 to-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 cyberpunk-grid opacity-30 animate-pulse-slow"></div>
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 border border-orange-400/40 rotate-45"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute bottom-4 right-4 text-orange-400/60 text-xs font-mono animate-pulse">
          Superhex Grid Loading...
        </div>
      </div>
    )
  }
);

export const SafeDynamicWebGLSuperhexScene = (props: any) => (
  <ThreeDErrorWrapper>
    <DynamicWebGLSuperhexScene {...props} />
  </ThreeDErrorWrapper>
);

export const DynamicOKODistributedVisualizer = dynamic(
  () => import('./OKODistributedVisualizer').then(mod => ({ default: mod.OKODistributedVisualizer })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-gradient-to-b from-slate-900/50 to-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 cyberpunk-grid opacity-30 animate-pulse-slow"></div>
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-orange-400/40 rounded-full animate-ping"
              style={{
                left: `${25 + Math.random() * 50}%`,
                top: `${25 + Math.random() * 50}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        <div className="absolute bottom-4 right-4 text-orange-400/60 text-xs font-mono animate-pulse">
          OKO Network Loading...
        </div>
      </div>
    )
  }
);

export const SafeDynamicOKODistributedVisualizer = (props: any) => (
  <ThreeDErrorWrapper>
    <DynamicOKODistributedVisualizer {...props} />
  </ThreeDErrorWrapper>
);
