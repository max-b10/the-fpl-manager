import { stack } from '../constants/stack';
import TechStackCard from '../components/Cards/TechStackCard';
import { useNavigationWithId } from '../hooks/useNavigationWithId';
import Navbar from '../components/Navbar/Navbar';
import FadeIn from '../components/Animations/FadeIn';
import Footer from '../components/Footer';

const About = () => {
  const handleSubmit = useNavigationWithId();

  return (
    <>
      <Navbar showIdForm={false} handleSubmit={handleSubmit} />
      <FadeIn>
        <main className="mt-6 flex min-h-[85vh] flex-grow flex-col items-center overflow-auto px-4">
          <div className="max-w-2/3 grid-auto-rows-1fr mx-auto grid h-full w-4/5 flex-grow grid-cols-1 gap-4 sm:max-w-screen-lg sm:grid-cols-3">
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
      </FadeIn>

      <Footer />
    </>
  );
};

export default About;
