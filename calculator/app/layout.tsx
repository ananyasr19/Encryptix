import { type Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Simple Calculator',
  description: 'A modern, responsive calculator.',
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
