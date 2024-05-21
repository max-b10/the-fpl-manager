import FadeIn from '../components/Animations/FadeIn';
import Footer from '../components/Footer';
import LandingIdForm from '../components/Forms/LandingIdForm';
import { useNavigationWithId } from '../hooks/useNavigationWithId';

const Landing = () => {
  const handleSubmit = useNavigationWithId();

  return (
    <FadeIn>
      <div className="flex min-h-screen flex-col justify-between">
        <main className="relative isolate flex flex-grow items-center justify-center overflow-hidden">
          <div className="mx-auto mb-16 max-w-7xl px-6 lg:px-8">
            <LandingIdForm onSubmit={handleSubmit} />
          </div>
        </main>
        <Footer />
      </div>
    </FadeIn>
  );
};

export default Landing;
