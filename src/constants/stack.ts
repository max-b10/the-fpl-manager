import {
  SiTypescript,
  SiCypress,
  SiVite,
  SiRedux,
  SiAxios,
  SiSwr,
  SiShadcnui,
} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';

export const stack = [
  {
    title: 'React',
    icon: FaReact,
    description: 'A JavaScript library for building user interfaces',
  },
  {
    title: 'TypeScript',
    icon: SiTypescript,
    description:
      'A statically typed superset of JavaScript that compiles to plain JavaScript',
  },
  {
    title: 'Vite',
    icon: SiVite,
    description:
      'A build tool that aims to provide a faster and leaner development experience for modern web projects',
  },
  {
    title: 'Tailwind',
    icon: RiTailwindCssFill,
    description:
      'A utility-first CSS framework for rapidly building custom user interfaces',
  },
  {
    title: 'shadcn/ui',
    icon: SiShadcnui,
    description:
      'An accessible, customizable and Open Source component library',
  },
  {
    title: 'Redux',
    icon: SiRedux,
    description: 'A predictable state container for JavaScript apps',
  },
  {
    title: 'Axios',
    icon: SiAxios,
    description: 'A promise-based HTTP client for the browser and node.js',
  },
  {
    title: 'useSWR',
    icon: SiSwr,
    description: 'A React Hooks library for remote data fetching',
  },
  {
    title: 'Cypress',
    icon: SiCypress,
    description:
      'An end-to-end testing framework designed to simplify the testing process',
  },
];
export const STACK_LENGTH = 9;
