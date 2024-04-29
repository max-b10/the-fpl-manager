import { useDispatch, useSelector } from 'react-redux';
import { useCheckId } from '../hooks/useCheckId';
import { RootState } from '../state/store';
import { useManagerHistoryData } from '../hooks/useManagerHistoryData';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { IManagerHistory } from '../types/manager/managerHistory';
import { fetcher } from '../lib/fetcher';
import { API_ENDPOINTS } from '../../api/endpoints';
import { IManagerData } from '../types/manager/managerData';
import { useManagerData } from '../hooks/useManagerData';
import Header from '../components/Header';
import { IFormData } from '../types/FormData';
import { setId } from '../state/idSlice';
import { LoaderIcon } from 'lucide-react';
import ManagerCard from '../components/ManagerCard';

const CompareDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const { playerName } = useManagerData(fplId);
  const { pastSeasonsData } = useManagerHistoryData(fplId);
  const { data: enemyData, isValidating: isLoadingEnemyData } =
    useSWR<IManagerData>(
      `http://localhost:3005/${API_ENDPOINTS.manager}/${id}`,
      fetcher
    );
  const { data: enemyHistory, isValidating: isLoadingEnemyHistory } =
    useSWR<IManagerHistory>(
      `http://localhost:3005/${API_ENDPOINTS.managerHistory}/${id}`,
      fetcher
    );
  const handleSubmit = (data: IFormData) => {
    dispatch(setId(data.id));
    navigate('/dashboard');
  };
  useCheckId();
  console.log(enemyHistory, pastSeasonsData);

  const enemyName = `${enemyData?.player_first_name} ${enemyData?.player_last_name}`;
  return (
    <>
      {isLoadingEnemyData || isLoadingEnemyHistory ? (
        <div className="flex min-h-screen items-center justify-center">
          <LoaderIcon className="animate-spin" />
        </div>
      ) : (
        <>
          <Header
            headerText={`${playerName} vs ${enemyData?.player_first_name} ${enemyData?.player_last_name}`}
            handleSubmit={handleSubmit}
            showBackIcon={true}
            showIdForm={false}
            onBackClick={() => navigate('/managercomparison')}
          />
          <main>
            <div className="mt-10 flex flex-col items-center px-4 md:flex-row md:justify-center md:px-0">
              <div className="flex flex-1 justify-center">
                <ManagerCard name={playerName} />
              </div>
              <div className="mx-auto flex flex-1 justify-center ">
                <ManagerCard name={enemyName} />
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};
export default CompareDetails;
