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
  },
  {
    id: 3,
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
  },
  {
    id: 4,
    title: 'Trip Imagine',
    description: 'Crafted a web app for creating and showcasing travel itineraries, offering users a seamless platform for planning and sharing their journeys.',
    image: '/trip-imagine.png',
    url: 'https://tripimagine.com',
    skills: [
      'React',
      'Redux',
      'Javascript',
      'NodeJS',
      'CSS',
      'Google Maps API',
    ],
  },
];
