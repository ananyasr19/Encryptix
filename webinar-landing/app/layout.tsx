import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: "Master the Art of Personal Branding | Free Webinar",
    description: "Join branding expert Sarah Lane for a powerful live webinar on personal branding, LinkedIn growth, and career visibility.",
  };

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
