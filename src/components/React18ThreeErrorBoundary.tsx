'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * React 18 compatible error boundary specifically for Three.js components
 * Handles ReactCurrentBatchConfig and other React Three Fiber errors gracefully
 */
export class React18ThreeErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(error: Error): State {
    // Check for specific React Three Fiber errors
    if (
      error.message.includes('ReactCurrentBatchConfig') ||
      error.message.includes('fiber') ||
      error.message.includes('three') ||
      error.message.includes('canvas') ||
      error.message.includes('webgl')
    ) {
      console.warn('React Three Fiber compatibility error caught:', error.message);
      return { hasError: true, error };
    }
    
    // Re-throw other errors
    throw error;
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('React Three Fiber error boundary caught:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // Provide enhanced fallback
      return this.props.fallback || (
        <div className="w-full h-full bg-gradient-to-b from-slate-900/50 to-slate-800/50 relative overflow-hidden">
          <div className="absolute inset-0 cyberpunk-grid opacity-30 animate-pulse-slow"></div>
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-orange-400/60 rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          <div className="absolute bottom-4 right-4 text-orange-400/60 text-xs font-mono">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              Using CSS Fallback Mode
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Hook-based error boundary for functional components
 * Provides additional error handling for React 18 concurrent features
 */
export function useThreeErrorHandler() {
  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (
        event.error?.message?.includes('ReactCurrentBatchConfig') ||
        event.error?.message?.includes('fiber') ||
        event.error?.message?.includes('three')
      ) {
        console.warn('Three.js runtime error caught and handled:', event.error);
        event.preventDefault(); // Prevent the error from crashing the app
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (
        event.reason?.message?.includes('ReactCurrentBatchConfig') ||
        event.reason?.message?.includes('fiber') ||
        event.reason?.message?.includes('three')
      ) {
        console.warn('Three.js promise rejection caught and handled:', event.reason);
        event.preventDefault(); // Prevent unhandled rejection
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);
}
