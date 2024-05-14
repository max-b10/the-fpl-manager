import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-4 w-full border-t border-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <div className="mx-auto max-w-2xl">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            Max Bungay | Frontend Developer
          </span>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Github className="cursor-pointer text-white hover:text-primary dark:hover:text-white" />
            <Linkedin className="cursor-pointer text-white hover:text-primary dark:hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
