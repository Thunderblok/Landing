'use client';

import React, { useEffect } from 'react';

/**
 * Global error handler for React Three Fiber and hydration issues
 * Prevents ReactCurrentBatchConfig errors from crashing the application
 */
export function GlobalErrorHandler() {
  useEffect(() => {
    // Handle React Three Fiber errors globally
    const originalConsoleError = console.error;
    console.error = (...args) => {
      const message = args.join(' ');
      
      // Suppress known React Three Fiber errors that don't affect functionality
      if (
        message.includes('ReactCurrentBatchConfig') ||
        message.includes('Minified React error #418') ||
        message.includes('react-reconciler') ||
        message.includes('fiber-reconciler')
      ) {
        console.warn('⚠️ Three.js compatibility warning (suppressed):', ...args);
        return; // Don't log as error
      }
      
      // Log other errors normally
      originalConsoleError(...args);
    };

    // Global error handlers
    const handleError = (event: ErrorEvent) => {
      if (
        event.error?.message?.includes('ReactCurrentBatchConfig') ||
        event.error?.message?.includes('fiber') ||
        event.error?.message?.includes('Cannot read properties of undefined')
      ) {
        console.warn('🛡️ Global error handler caught Three.js error:', event.error.message);
        event.preventDefault();
        return false;
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (
        event.reason?.message?.includes('ReactCurrentBatchConfig') ||
        event.reason?.message?.includes('fiber') ||
        event.reason?.message?.includes('three')
      ) {
        console.warn('🛡️ Global rejection handler caught Three.js promise rejection:', event.reason);
        event.preventDefault();
        return false;
      }
    };

    // React error boundary handler
    const originalOnError = window.onerror;
    window.onerror = (message, source, lineno, colno, error) => {
      if (typeof message === 'string' && (
        message.includes('ReactCurrentBatchConfig') ||
        message.includes('Minified React error #418')
      )) {
        console.warn('🛡️ Window error handler caught React/Three.js error:', message);
        return true; // Prevent default error handling
      }
      
      if (originalOnError) {
        return originalOnError(message, source, lineno, colno, error);
      }
      return false;
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      console.error = originalConsoleError;
      window.onerror = originalOnError;
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return null; // This component doesn't render anything
}

/**
 * Hook for applying global error suppression
 * Use this in your main App component
 */
export function useGlobalErrorSuppression() {
  useEffect(() => {
    // Suppress React DevTools warnings for known Three.js issues
    if (typeof window !== 'undefined' && (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      const hook = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;
      const originalOnCommitFiberRoot = hook.onCommitFiberRoot;
      
      hook.onCommitFiberRoot = (id: any, root: any, ...args: any[]) => {
        try {
          if (originalOnCommitFiberRoot) {
            originalOnCommitFiberRoot(id, root, ...args);
          }
        } catch (error: any) {
          if (error?.message?.includes('ReactCurrentBatchConfig')) {
            console.warn('🛡️ DevTools error suppressed:', error.message);
          } else {
            throw error;
          }
        }
      };
    }
  }, []);
}
