import FadeIn from '../components/FadeIn';
import Footer from '../components/Footer';
import LandingIdForm from '../components/LandingIdForm';
import { useNavigationWithId } from '../hooks/useNavigationWithId';

const Landing = () => {
  const handleSubmit = useNavigationWithId();

  return (
    <FadeIn>
      <>
        <main className="relative isolate flex h-screen items-center justify-center overflow-hidden">
          <div className="mx-auto mb-16 max-w-7xl px-6  lg:px-8">
            <LandingIdForm onSubmit={handleSubmit} />
          </div>
        </main>
        <Footer />
      </>
    </FadeIn>
  );
};

export default Landing;
