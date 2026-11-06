import { Locale } from '@/i18n/config';

const en = {
  header: {
    title: 'Senior Salesforce Developer',
    bio: 'Senior Salesforce Developer with full-stack expertise in Apex, LWC, React, and Node.js, delivering scalable enterprise solutions across cloud platforms.',
  },
  nav: {
    about: 'About',
    experiences: 'Experiences',
    projects: 'Projects',
  },
  about: {
    heading: 'About',
    paragraphs: [
      'My coding journey began in 2015, sparked by curiosity about SEO and HTML. Since then, I\'ve grown into a Senior Salesforce Developer building enterprise solutions across industries like finance, insurance, and e-commerce.',
      'Today, I specialize in Salesforce (Apex, LWC, Flow, CPQ) backed by {years}+ years of full-stack experience in React, Node.js, and AWS. I thrive on complex integrations and architecture-heavy projects that go beyond declarative solutions.',
      'Beyond coding, I stay active at the gym, enjoy time with family, and follow the stock market closely.',
    ],
  },
  experiences: {
    heading: 'Experience',
    resume: 'View Full Resume',
  },
  projects: {
    heading: 'Projects',
    builtWithAI: {
      title: 'Built with AI',
      description: 'Built by me using AI coding tools.',
    },
    builtBeforeAI: {
      title: 'Built before AI',
      description: 'Coded by hand, before I used AI tools.',
    },
  },
};

const fr: typeof en = {
  header: {
    title: 'Développeur Salesforce sénior',
    bio: 'Développeur Salesforce sénior avec une expertise full stack en Apex, LWC, React et Node.js, livrant des solutions d’entreprise scalables sur diverses plateformes cloud.',
  },
  nav: {
    about: 'À propos',
    experiences: 'Expériences',
    projects: 'Projets',
  },
  about: {
    heading: 'À propos',
    paragraphs: [
      'Mon parcours en programmation a commencé en 2015, par curiosité pour le SEO et le HTML. Depuis, je suis devenu Développeur Salesforce sénior et je bâtis des solutions d’entreprise dans des secteurs comme la finance, l’assurance et le e-commerce.',
      'Aujourd’hui, je me spécialise en Salesforce (Apex, LWC, Flow, CPQ), appuyé par plus de {years} ans d’expérience full stack en React, Node.js et AWS. Je m’épanouis dans les intégrations complexes et les projets à forte composante d’architecture qui vont au-delà des solutions déclaratives.',
      'En dehors du code, je reste actif au gym, je profite du temps en famille et je suis de près les marchés boursiers.',
    ],
  },
  experiences: {
    heading: 'Expérience',
    resume: 'Voir le CV complet (en anglais)',
  },
  projects: {
    heading: 'Projets',
    builtWithAI: {
      title: 'Conçu avec l’IA',
      description: 'Développé par moi à l’aide d’outils de code IA.',
    },
    builtBeforeAI: {
      title: 'Conçu avant l’IA',
      description: 'Codé à la main, avant que j’utilise des outils d’IA.',
    },
  },
};

export const ui: Record<Locale, typeof en> = { en, fr };
