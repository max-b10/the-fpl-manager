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
    comments: 'My frontend library of choice for the foreseeable future.',
  },
  {
    title: 'TypeScript',
    icon: SiTypescript,
    description:
      'A statically typed superset of JavaScript that compiles to plain JavaScript',
    comments:
      'Static typing, early error detection and wide general adoption across codebases makes TypeScript a no-brainer.',
  },
  {
    title: 'Vite',
    icon: SiVite,
    description:
      'A build tool that aims to provide a faster and leaner development experience for modern web projects',
    comments:
      'I opted for Vite because it provides a swift development experience and flexibility. I wanted to try something other than Next.js as well.',
  },
  {
    title: 'Tailwind',
    icon: RiTailwindCssFill,
    description:
      'A utility-first CSS framework for rapidly building custom user interfaces',
    comments:
      'I have been converted into a fan of Tailwind. Make sure you have the Tailwind CSS IntelliSense extension!',
  },
  {
    title: 'shadcn/ui',
    icon: SiShadcnui,
    description:
      'An accessible and customizable collection of components to copy and paste into your apps',
    comments:
      'I had to see what all the fuss what about - I was not disappointed!',
  },
  {
    title: 'Redux',
    icon: SiRedux,
    description: 'A predictable state container for JavaScript apps',
    comments: 'Redux Toolkit to be precise. Who wants all that boilerplate?',
  },
  {
    title: 'Axios',
    icon: SiAxios,
    description: 'A promise-based HTTP client for the browser and node.js',
    comments:
      'Axios automatically stringifies the data when sending requests which means one less step than fetch.',
  },
  {
    title: 'useSWR',
    icon: SiSwr,
    description: 'A React Hooks library for remote data fetching',
    comments:
      'No need to worry about useEffect re-renders when you have useSWR.',
  },
  {
    title: 'Cypress',
    icon: SiCypress,
    description:
      'An end-to-end testing framework designed to simplify the testing process',
    comments:
      'Cypress makes it nice and easy to write tests and see them run in real-time.',
  },
];
export const STACK_LENGTH = 9;
