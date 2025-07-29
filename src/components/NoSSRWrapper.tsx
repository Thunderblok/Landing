'use client';

import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

/**
 * Enhanced No-SSR wrapper specifically designed for React Three Fiber components
 * Prevents ReactCurrentBatchConfig errors by ensuring Canvas never renders server-side
 */

interface NoSSRWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

// Default fallback for 3D components
const Default3DFallback = () => (
  <div className="w-full h-full bg-gradient-to-b from-slate-900/50 to-slate-800/50 relative overflow-hidden">
    <div className="absolute inset-0 cyberpunk-grid opacity-20"></div>
    <div className="absolute bottom-4 right-4 text-orange-400/60 text-xs font-mono animate-pulse">
      Loading 3D Environment...
    </div>
  </div>
);

// Client-only wrapper that prevents any server-side rendering
function ClientOnlyWrapper({ children, fallback = <Default3DFallback /> }: NoSSRWrapperProps) {
  return <>{children}</>;
}

// Export a dynamic wrapper that completely bypasses SSR
export const NoSSRWrapper = dynamic(
  () => Promise.resolve(ClientOnlyWrapper),
  {
    ssr: false,
    loading: () => <Default3DFallback />
  }
);

/**
 * Higher-order component to wrap any component with no-SSR
 * Especially useful for React Three Fiber Canvas components
 */
export function withNoSSR<P extends object>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) {
  const WrappedComponent = (props: P) => (
    <NoSSRWrapper fallback={fallback}>
      <Component {...props} />
    </NoSSRWrapper>
  );
  
  WrappedComponent.displayName = `withNoSSR(${Component.displayName || Component.name})`;
  return WrappedComponent;
}

export default NoSSRWrapper;