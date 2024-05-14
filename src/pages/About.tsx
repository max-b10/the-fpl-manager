import { stack } from '../constants/stack';
import TechStackCard from '../components/Cards/TechStackCard';
import { useNavigationWithId } from '../hooks/useNavigationWithId';
import Navbar from '../components/Navbar';

const About = () => {
  const handleSubmit = useNavigationWithId();

  return (
    <>
      <Navbar showIdForm={false} handleSubmit={handleSubmit} />
      <main className="flex flex-col items-center justify-center space-y-4 overflow-auto px-4">
        <div className="mb-4 text-center">
          <p className="text-m font-medium">
            This application is built with the following technologies:
          </p>
        </div>
        <div className="max-w-2/3 grid-auto-rows-1fr mx-auto grid w-4/5 flex-grow grid-cols-1 gap-4 sm:max-w-screen-lg sm:grid-cols-3">
          {stack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <TechStackCard
                title={tech.title}
                key={index}
                icon={<Icon className="h-6 w-6" />}
                description={tech.description}
                comments={tech.comments}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default About;
