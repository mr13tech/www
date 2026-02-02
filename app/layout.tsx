import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import { CustomCursor } from '@/components/cursor'
import { StickyContact } from '@/components/sticky-contact'
import './globals.css'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Pylyp Radionov - Full Stack Web3 Engineer',
  description:
    'Software engineer specialized in blockchain, smart contracts, and Web3. Portfolio showcasing experience in DeFi, chain data ETL, and technical leadership.',
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
        <StickyContact />
      </body>
    </html>
  )
}
