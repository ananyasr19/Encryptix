import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
title: 'Tribute to Dr. A.P.J. Abdul Kalam',
  description: 'A heartfelt tribute to the Missile Man of India, Dr. A.P.J. Abdul Kalam.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
