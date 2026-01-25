import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'mr13tech personal d website',
  description: 'me story and me projects',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-900 px-2">
          {children}
        </div>
      </body>
    </html>
  )
}
