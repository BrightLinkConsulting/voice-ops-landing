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
  title: 'BrightLink Consulting — Installed Infrastructure. Expanding Intelligence.',
  description: 'A done-for-you business system installation: GoHighLevel CRM snapshot + AI Operating System you command by voice through Telegram. Built for subject matter experts ready to scale.',
  metadataBase: new URL('https://voiceops.brightlinkconsulting.com'),
  openGraph: {
    title: 'BrightLink Consulting — Installed Infrastructure. Expanding Intelligence.',
    description: 'Stop managing your business. Start commanding it. Complete GHL system + AI voice command layer installed in 7-14 days.',
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
      <body className="font-body bg-brand-dark text-[#F4F4F5] antialiased">
        {children}
      </body>
    </html>
  )
}
