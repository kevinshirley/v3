import type { Metadata } from 'next';

import { Locale } from '@/i18n/config';

const siteUrl = 'https://kevinshirley.com';
const pageUrls: Record<Locale, string> = {
  en: siteUrl,
  fr: `${siteUrl}/fr`,
};

const shared = {
  metadataBase: new URL(siteUrl),
  authors: [{ name: 'Kevin Shirley', url: siteUrl }],
  creator: 'Kevin Shirley',
  robots: {
    index: true,
    follow: true,
  },
};

const content: Record<Locale, {
  title: string;
  description: string;
  keywords: string[];
  ogDescription: string;
  ogLocale: string;
  shortDescription: string;
  jobTitle: string;
  city: string;
}> = {
  en: {
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
    ogDescription: 'Senior Salesforce Developer with 8+ years of full-stack experience in Apex, LWC, React, and Node.js. Building scalable enterprise solutions.',
    ogLocale: 'en_CA',
    shortDescription: 'Senior Salesforce Developer with 8+ years of full-stack experience in Apex, LWC, React, and Node.js.',
    jobTitle: 'Senior Salesforce Developer',
    city: 'Montreal',
  },
  fr: {
    title: 'Kevin Shirley | Développeur Salesforce sénior',
    description: 'Développeur Salesforce sénior avec plus de 8 ans d’expérience full stack. Spécialisé en Apex, LWC, Flow, CPQ, React, Node.js et AWS. Basé à Montréal.',
    keywords: [
      'Développeur Salesforce',
      'Développeur Salesforce sénior',
      'Développeur Apex',
      'Lightning Web Components',
      'LWC',
      'Salesforce CPQ',
      'Développeur Full Stack',
      'Développeur React',
      'Node.js',
      'AWS',
      'Montréal',
      'Kevin Shirley',
    ],
    ogDescription: 'Développeur Salesforce sénior avec plus de 8 ans d’expérience full stack en Apex, LWC, React et Node.js. Je bâtis des solutions d’entreprise scalables.',
    ogLocale: 'fr_CA',
    shortDescription: 'Développeur Salesforce sénior avec plus de 8 ans d’expérience full stack en Apex, LWC, React et Node.js.',
    jobTitle: 'Développeur Salesforce sénior',
    city: 'Montréal',
  },
};

export const buildMetadata = (locale: Locale): Metadata => {
  const page = content[locale];

  return {
    ...shared,
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      type: 'website',
      url: pageUrls[locale],
      title: page.title,
      description: page.ogDescription,
      siteName: 'Kevin Shirley',
      locale: page.ogLocale,
    },
    twitter: {
      card: 'summary',
      title: page.title,
      description: page.shortDescription,
      creator: '@kevinshirley',
    },
    alternates: {
      canonical: pageUrls[locale],
      languages: {
        en: pageUrls.en,
        fr: pageUrls.fr,
        'x-default': pageUrls.en,
      },
    },
  };
};

export const buildJsonLd = (locale: Locale) => {
  const page = content[locale];

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kevin Shirley',
    url: pageUrls[locale],
    jobTitle: page.jobTitle,
    description: page.shortDescription,
    knowsAbout: ['Salesforce', 'Apex', 'Lightning Web Components', 'Salesforce CPQ', 'React', 'Node.js', 'AWS', 'TypeScript'],
    address: { '@type': 'PostalAddress', addressLocality: page.city, addressCountry: 'CA' },
    sameAs: [
      'https://github.com/kevinshirley',
      'https://www.linkedin.com/in/kevinshirley',
    ],
  };
};
