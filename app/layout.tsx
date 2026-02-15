import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import { CustomCursor } from '@/components/cursor'
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body className={`${robotoMono.className} h-full overflow-hidden bg-zinc-950`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
