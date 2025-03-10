import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Theme } from '@radix-ui/themes'

import './globals.css'
import '@radix-ui/themes/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kevin Shirley | Software Developer',
  description: 'Experienced Software Developer specializing in React, TypeScript, and AWS, building cloud-based enterprise solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900`}>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  )
}
