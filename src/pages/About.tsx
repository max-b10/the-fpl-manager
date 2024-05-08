import Navbar from '../components/Navbar';
import { stack } from '../constants/stack';
import TechStackCard from '../components/Cards/TechStackCard';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="mx-4 grid grid-cols-1 justify-items-center gap-y-4 md:mx-8 md:grid-cols-3 md:gap-x-0">
        {stack.map((tech, index) => {
          const Icon = tech.icon;
          return <TechStackCard key={index} icon={<Icon />} />;
        })}
      </div>
    </>
  );
};

export default About;
