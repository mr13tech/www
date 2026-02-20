import type { Metadata, Viewport } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Pylyp Radionov - Fullstack Engineer & Product Architect',
  description:
    'Fullstack engineer with 7+ years in blockchain, big data, and AI-augmented engineering. From low-level C++ protocol optimization to high-conversion React frontends.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${robotoMono.className} h-full bg-zinc-950`}>
        {children}
      </body>
    </html>
  )
}
