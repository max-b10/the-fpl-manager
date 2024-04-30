import LandingIdForm from '../components/LandingIdForm';
import Navbar from '../components/Navbar';

import { useNavigationWithId } from '../hooks/useNavigationWithId';

const Landing = () => {
  const handleSubmit = useNavigationWithId();

  return (
    <>
      <Navbar />

      <div className="relative isolate flex h-screen items-center justify-center overflow-hidden">
        <div className="mx-auto mb-16 max-w-7xl px-6  lg:px-8">
          <LandingIdForm onSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
};

export default Landing;
