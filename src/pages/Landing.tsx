import { useNavigate } from 'react-router-dom';
import LandingIdForm from '../components/LandingIdForm';
import Navbar from '../components/Navbar';
import { useDispatch } from 'react-redux';
import { setId } from '../state/idSlice';
import { IFormData } from '../types/FormData';

const Landing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (data: IFormData) => {
    dispatch(setId(data.id));
    navigate('/dashboard');
  };

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
