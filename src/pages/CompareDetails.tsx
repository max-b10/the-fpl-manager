import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
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

const CompareDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const { playerName } = useManagerData(fplId);
  const { pastSeasonsData } = useManagerHistoryData(fplId);
  const { data: enemyData } = useSWR<IManagerData>(
    `http://localhost:3005/${API_ENDPOINTS.manager}/${id}`,
    fetcher
  );
  const { data: enemyHistory } = useSWR<IManagerHistory>(
    `http://localhost:3005/${API_ENDPOINTS.managerHistory}/${id}`,
    fetcher
  );
  const handleSubmit = (data: IFormData) => {
    dispatch(setId(data.id));
    navigate('/dashboard');
  };
  useCheckId();
  console.log(pastSeasonsData);

  console.log(enemyHistory, enemyData?.player_first_name);
  return (
    <>
      <Navbar />
      <Header
        headerText={`${playerName} vs ${enemyData?.player_first_name} ${enemyData?.player_last_name}`}
        // subText={`${enemyData?.player_first_name} ${enemyData?.player_last_name}`}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
export default CompareDetails;
