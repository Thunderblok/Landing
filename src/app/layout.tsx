import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}