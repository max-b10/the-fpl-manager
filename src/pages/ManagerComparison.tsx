import Navbar from '../components/Navbar';

import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { LoaderIcon } from 'lucide-react';
import { useCheckId } from '../hooks/useCheckId';
import { useManagerData } from '../hooks/useManagerData';
import IdForm from '../components/IdForm';
import { setId } from '../state/idSlice';
import { useDispatch } from 'react-redux';
import { IFormData } from '../types/FormData';

const ManagerComparison = () => {
  const dispatch = useDispatch();

  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const { isLoadingManagerData, isLoadingManagerHistory } =
    useManagerData(fplId);
  const handleSubmit = (data: IFormData) => {
    dispatch(setId(data.id));
    // navigate('/dashboard');
  };
  useCheckId();

  return (
    <>
      <Navbar />
      {isLoadingManagerData || isLoadingManagerHistory ? (
        <div className="flex min-h-screen items-center justify-center">
          <LoaderIcon className="animate-spin" />
        </div>
      ) : (
        <>
          <div className="flex max-w-7xl justify-between px-4 py-6 sm:px-6 lg:px-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight ">
                manager comparison
              </h1>
              <p className="text-s text-muted-foreground">here</p>
            </div>
            <div className="flex align-middle">
              <IdForm onSubmit={handleSubmit} />
            </div>
          </div>

          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div>hi</div>
          </main>
        </>
      )}
    </>
  );
};

export default ManagerComparison;
