import { stack } from '../constants/stack';
import TechStackCard from '../components/Cards/TechStackCard';
import { useNavigationWithId } from '../hooks/useNavigationWithId';
import Navbar from '../components/Navbar/Navbar';
import FadeIn from '../components/Animations/FadeIn';
import Footer from '../components/Footer';
import MainContainer from '../components/Layout/MainContainer';

const About = () => {
  const handleSubmit = useNavigationWithId();

  return (
    <>
      <Navbar showIdForm={false} handleSubmit={handleSubmit} />
      <FadeIn>
        <MainContainer>
          <div className="max-w-2/3 grid-auto-rows-1fr mx-auto mt-4 grid w-4/5 flex-grow grid-cols-1 gap-4 sm:max-w-screen-lg sm:grid-cols-3 md:mt-0">
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
        </MainContainer>
      </FadeIn>

      <Footer />
    </>
  );
};

export default About;
