import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-4 w-full border-t p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <div className="mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-sm sm:text-center">
            <span className="text-white dark:text-gray-400">Max Bungay |</span>
            <span className="text-muted-foreground dark:text-gray-400">
              {' '}
              Frontend Developer
            </span>
          </div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a
              href="https://github.com/max-b10/the-fpl-manager"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 cursor-pointer text-white hover:text-primary dark:hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/max-bungay/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4 cursor-pointer text-white hover:text-primary dark:hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
