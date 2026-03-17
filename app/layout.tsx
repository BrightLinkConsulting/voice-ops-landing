import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const body = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CEO Systems — Installed Infrastructure. Expanding Intelligence.',
  description: 'A done-for-you operating environment for expert-led businesses: infrastructure, intelligence, client visibility, and executive operating capability — installed in 7-14 days.',
  metadataBase: new URL('https://voiceops.brightlinkconsulting.com'),
  openGraph: {
    title: 'CEO Systems — Installed Infrastructure. Expanding Intelligence.',
    description: 'Your business infrastructure, installed and running. AIOS intelligence, ClientBloom retention, and CE.OS executive capability — all inside one connected operating environment.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,300;1,400;1,500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-brand-dark text-[#F4F4F5] antialiased">
        {children}
      </body>
    </html>
  )
}
