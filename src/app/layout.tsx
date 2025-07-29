import type { Metadata } from 'next'
import './globals.css'
import { GlobalErrorHandler } from '@/components/GlobalErrorHandler'

export const metadata: Metadata = {
  title: 'OKO Holding Corp - A New Dawn in Distributed Intelligence',
  description: 'The first AI-native operating system for the distributed era. Powered by Thunderline, governed by Thundercrown.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Global error handler for React Three Fiber issues */}
        <GlobalErrorHandler />
        
        {/* 3D Perspective Grid Background */}
        <div className="container-loader">
          <div className="loader"></div>
        </div>
        {children}
      </body>
    </html>
  )
}