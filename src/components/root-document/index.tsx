import React from 'react';
import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';

import { buildJsonLd } from '@/data/seo';
import { Locale } from '@/i18n/config';

import '@/app/globals.css';
import '@radix-ui/themes/styles.css';

const inter = Inter({ subsets: ['latin'] });

interface RootDocumentProps {
  locale: Locale;
  children: React.ReactNode;
}

const RootDocument: React.FC<RootDocumentProps> = ({ locale, children }) => (
  <html lang={locale}>
    <body className={`${inter.className} bg-slate-900`}>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(locale)) }}
      />
      <Theme hasBackground={false}>
        {children}
      </Theme>
    </body>
  </html>
);

export default RootDocument;
