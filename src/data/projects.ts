import { Localized } from '@/i18n/config';

export interface ProjectType {
  id: number;
  image: string;
  title: string;
  description: Localized;
  url: string;
  skills?: string[];
  github?: string;
  builtWithAI?: boolean;
}

export const projects: ProjectType[] = [
  {
    id: 5,
    title: 'WealthIron',
    builtWithAI: true,
    description: {
      en: 'Personal wealth management platform I built and actively use to run my own finances, available as a web app and an installable mobile app. Features a pay-cycle P&L statement, a 7-bucket allocation system, and an AI financial advisor that reads your actual numbers instead of giving generic advice.',
      fr: 'Plateforme de gestion de patrimoine personnel que j’ai bâtie et que j’utilise activement pour gérer mes propres finances, offerte en web app et en application mobile installable. Elle comprend un P&L par cycle de paie, un système d’allocation à 7 buckets et un conseiller financier IA qui lit vos vrais chiffres plutôt que de donner des conseils génériques.',
    },
    url: 'https://wealthiron.com',
    image: '/wealthiron.png',
    skills: [
      'React',
      'NextJS',
      'NodeJS',
      'Fastify',
      'Typescript',
      'Tailwind',
      'PostgreSQL',
      'Redis',
      'PWA',
      'Groq AI',
    ],
  },
  {
    id: 1,
    title: 'Quote Form Builder',
    description: {
      en: 'Web app for creating and customizing quote forms in real-time. Users can dynamically input details and instantly view the calculated quote amount as they complete the form.',
      fr: 'Web app pour créer et personnaliser des formulaires de soumission en temps réel. Les utilisateurs peuvent saisir leurs informations de façon dynamique et voir instantanément le montant calculé de la soumission à mesure qu’ils remplissent le formulaire.',
    },
    url: 'https://quote-form-beryl.vercel.app/',
    image: '/quote-forms-project-softelo-kevin-shirley.png',
    skills: [
      'React',
      'NextJS',
      'NodeJS',
      'Javascript',
      'Typescript',
      'Tailwind',
    ],
    github: 'https://github.com/kevinshirley/quote-form'
  },
  {
    id: 2,
    title: 'Billmate.io',
    description: {
      en: 'Billmate.io is an all-in-one business management software designed to streamline operations for businesses. It offers features like CRM, invoicing, scheduling, online forms, and more. The platform aims to enhance efficiency, client management, and overall workflow for service-oriented businesses.',
      fr: 'Billmate.io est un logiciel de gestion d’entreprise tout-en-un conçu pour simplifier les opérations des entreprises. Il offre des fonctionnalités comme un CRM, la facturation, la planification, des formulaires en ligne et plus encore. La plateforme vise à améliorer l’efficacité, la gestion des clients et le workflow global des entreprises de services.',
    },
    url: 'https://billmate.io',
    image: '/billmate-io.png',
    skills: [
      'React',
      'NextJS',
      'NodeJS',
      'Firebase',
      'Javascript',
      'Typescript',
      'CSS',
      'Google Calendar API',
      'Google Maps API',
      'Google Drive API',
      'Stripe API',
      'CMS',
    ],
    github: 'https://github.com/softelo/billmate'
  },
  {
    id: 3,
    title: 'Stock Market Recommender',
    description: {
      en: 'Built a Next.js app leveraging the Finnhub API to provide real-time stock ticker prices and the latest market news for seamless financial insights.',
      fr: 'Développé une app Next.js qui utilise l’API Finnhub pour fournir les prix des stock tickers en temps réel et les dernières nouvelles du marché, pour des informations financières accessibles en un coup d’œil.',
    },
    image: '/stockmarketrecommender.png',
    url: 'https://stockmarketrecommender.vercel.app/',
    skills: [
      'React',
      'NextJS',
      'NodeJS',
      'Javascript',
      'Typescript',
      'CSS',
      'Finnhub API',
      'Twitter API',
    ],
    github: 'https://github.com/kevinshirley/stockmarketrecommender'
  },
  {
    id: 4,
    title: 'Tic Tac Toe Game',
    description: {
      en: 'Responsive Tic Tac Toe game built using React, featuring interactive gameplay, real-time state updates, and a winning logic algorithm for an engaging user experience.',
      fr: 'Jeu de Tic Tac Toe responsive développé avec React, offrant une jouabilité interactive, des mises à jour de state en temps réel et un algorithme de détection de victoire pour une expérience utilisateur engageante.',
    },
    image: '/tic-tac-toe.png',
    url: 'https://tictactoe-sigma.vercel.app',
    skills: [
      'React',
      'Redux',
      'Javascript',
      'CSS',
    ],
    github: 'https://github.com/kevinshirley/tictactoe'
  },
];
