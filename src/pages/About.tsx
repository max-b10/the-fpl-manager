import { stack } from '../constants/stack';
import TechStackCard from '../components/Cards/TechStackCard';
import { useNavigationWithId } from '../hooks/useNavigationWithId';
import Navbar from '../components/Navbar/Navbar';
import FadeIn from '../components/FadeIn';
import Footer from '../components/Footer';

const About = () => {
  const handleSubmit = useNavigationWithId();

  return (
    <FadeIn>
      <div className="flex min-h-screen flex-col">
        <Navbar showIdForm={false} handleSubmit={handleSubmit} />
        <main className="mt-2 flex flex-grow flex-col items-center justify-center overflow-auto px-4">
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
      </div>
      <Footer />
    </FadeIn>
  );
};

export default About;
