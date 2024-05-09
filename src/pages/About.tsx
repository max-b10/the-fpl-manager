import Navbar from '../components/Navbar';
import { stack } from '../constants/stack';
import TechStackCard from '../components/Cards/TechStackCard';
import { useNavigationWithId } from '../hooks/useNavigationWithId';
const About = () => {
  const handleSubmit = useNavigationWithId();

  return (
    <>
      <Navbar showIdForm={false} handleSubmit={handleSubmit} />
      <main className="flex h-screen items-center justify-center">
        <div className="mx-4 grid grid-cols-1 justify-items-center gap-x-4 gap-y-4 sm:grid-cols-3 md:mx-8">
          {stack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <TechStackCard title={tech.title} key={index} icon={<Icon />} />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default About;
