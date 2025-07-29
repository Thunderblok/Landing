'use client';

import { useEffect, useState } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

// Component to ensure client-side only rendering
export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

// Error boundary for 3D components
interface ThreeDErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export class ThreeDError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ThreeDError';
  }
}

export function ThreeDErrorBoundary({ children, fallback }: ThreeDErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      if (error.message.includes('three') || error.message.includes('canvas') || error.message.includes('webgl')) {
        console.warn('3D component error caught:', error.message);
        setHasError(true);
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason?.message?.includes('three') || event.reason?.message?.includes('canvas')) {
        console.warn('3D component promise rejection caught:', event.reason);
        setHasError(true);
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  if (hasError && fallback) {
    return <>{fallback}</>;
  }

  if (hasError) {
    return (
      <div className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center text-gray-400">
          <div className="text-sm font-mono">Initializing 3D Environment...</div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
