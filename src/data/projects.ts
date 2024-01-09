export interface ProjectType {
  id: number;
  image: string;
  title: string;
  description: string;
  url: string;
  skills?: string[];
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Billmate.io',
    description: 'Billmate.io is an all-in-one business management software designed to streamline operations for businesses. It offers features like CRM, invoicing, scheduling, online forms, and more. The platform aims to enhance efficiency, client management, and overall workflow for service-oriented businesses.',
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
  },
  {
    id: 2,
    title: 'Stock Market Recommender',
    description: 'Stock ticker details and market news.',
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
  },
];
