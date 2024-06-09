import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Theme } from '@radix-ui/themes'
import { Toaster } from '@/utils/toast';

import './globals.css'
import '@radix-ui/themes/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kevin Shirley | Software Developer',
  description: 'Experienced Software Developer specializing in front-end development within cloud environments. Proficient in JavaScript/TypeScript, NodeJS, React, VueJS, Redux, Firebase, and AWS.',
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
          <Toaster position='top-right' />
        </Theme>
      </body>
    </html>
  )
}
