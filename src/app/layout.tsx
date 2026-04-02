import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Theme } from '@radix-ui/themes'

import './globals.css'
import '@radix-ui/themes/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://kevinshirley.com'),
  title: 'Kevin Shirley | Senior Salesforce Developer',
  description: 'Senior Salesforce Developer with 8+ years of full-stack experience. Specializing in Apex, LWC, Flow, CPQ, React, Node.js, and AWS. Based in Montreal.',
  keywords: [
    'Salesforce Developer',
    'Senior Salesforce Developer',
    'Apex Developer',
    'Lightning Web Components',
    'LWC',
    'Salesforce CPQ',
    'Full Stack Developer',
    'React Developer',
    'Node.js',
    'AWS',
    'Montreal',
    'Kevin Shirley',
  ],
  authors: [{ name: 'Kevin Shirley', url: 'https://kevinshirley.com' }],
  creator: 'Kevin Shirley',
  openGraph: {
    type: 'website',
    url: 'https://kevinshirley.com',
    title: 'Kevin Shirley | Senior Salesforce Developer',
    description: 'Senior Salesforce Developer with 8+ years of full-stack experience in Apex, LWC, React, and Node.js. Building scalable enterprise solutions.',
    siteName: 'Kevin Shirley',
  },
  twitter: {
    card: 'summary',
    title: 'Kevin Shirley | Senior Salesforce Developer',
    description: 'Senior Salesforce Developer with 8+ years of full-stack experience in Apex, LWC, React, and Node.js.',
    creator: '@kevinshirley',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://kevinshirley.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kevin Shirley',
    url: 'https://kevinshirley.com',
    jobTitle: 'Senior Salesforce Developer',
    description: 'Senior Salesforce Developer with 8+ years of full-stack experience in Apex, LWC, React, and Node.js.',
    knowsAbout: ['Salesforce', 'Apex', 'Lightning Web Components', 'Salesforce CPQ', 'React', 'Node.js', 'AWS', 'TypeScript'],
    address: { '@type': 'PostalAddress', addressLocality: 'Montreal', addressCountry: 'CA' },
    sameAs: [
      'https://github.com/kevinshirley',
      'https://www.linkedin.com/in/kevinshirley',
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-slate-900`}>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  )
}
