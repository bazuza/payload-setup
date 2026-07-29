import type { Metadata } from 'next'
import { Instrument_Sans, Hedvig_Letters_Serif } from 'next/font/google'
import '@/styles/globals.css'
import React from 'react'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

const hedvigLettersSerif = Hedvig_Letters_Serif({
  subsets: ['latin'],
  variable: '--font-hedvig',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elucient',
  description: 'Elucient',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${hedvigLettersSerif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
