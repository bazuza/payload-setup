import type { Metadata } from 'next'
import '@/styles/globals.css'
import React from 'react'

export const metadata: Metadata = {
  title: 'Elucient',
  description: 'Elucient',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
