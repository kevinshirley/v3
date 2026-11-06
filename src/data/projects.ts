export interface ProjectType {
  id: number;
  image: string;
  title: string;
  description: string;
  url: string;
  skills?: string[];
  github?: string;
}

export const projects: ProjectType[] = [
  {
    id: 5,
    title: 'WealthIron',
    description: 'Personal wealth management platform I built and actively use to run my own finances, available as a web app and an installable mobile app. Features a pay-cycle P&L statement, a 7-bucket allocation system, and an AI financial advisor that reads your actual numbers instead of giving generic advice.',
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
    description: 'Web app for creating and customizing quote forms in real-time. Users can dynamically input details and instantly view the calculated quote amount as they complete the form.',
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
    github: 'https://github.com/softelo/billmate'
  },
  {
    id: 3,
    title: 'Stock Market Recommender',
    description: 'Built a Next.js app leveraging the Finnhub API to provide real-time stock ticker prices and the latest market news for seamless financial insights.',
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
    description: 'Responsive Tic Tac Toe game built using React, featuring interactive gameplay, real-time state updates, and a winning logic algorithm for an engaging user experience.',
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
