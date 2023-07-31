import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Urbanist } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const urbanist = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Persona 3 Reload',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
