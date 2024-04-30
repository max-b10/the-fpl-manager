import { useSelector } from 'react-redux';
import { useCheckId } from '../hooks/useCheckId';
import { RootState } from '../state/store';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { IManagerHistory } from '../types/manager/managerHistory';
import { fetcher } from '../lib/fetcher';
import { API_ENDPOINTS } from '../../api/endpoints';
import { IManagerData } from '../types/manager/managerData';
import { useManagerData } from '../hooks/useManagerData';
import Header from '../components/Header';

import { LoaderIcon } from 'lucide-react';
import ManagerCard from '../components/ManagerCard';
import { calculateMeanRank } from '../helpers/calculateMean';
import { useNavigationWithId } from '../hooks/useNavigationWithId';
import teamMapping from '../constants/teamMapping';

const CompareDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const { playerName, totalRankMean, favouriteTeamSrc } = useManagerData(fplId);
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
  const enemyPastSeasonsData = enemyHistory?.past;
  const enemyTotalRankMean = calculateMeanRank(enemyPastSeasonsData);

  const handleSubmit = useNavigationWithId();
  useCheckId();

  const enemyName = `${enemyData?.player_first_name} ${enemyData?.player_last_name}`;
  const enemyFavouriteTeamId = enemyData?.favourite_team;
  const enemyFavouriteTeamObj = teamMapping.find(
    (team) => team.id === enemyFavouriteTeamId
  );
  const enemyFavouriteTeamSrc = enemyFavouriteTeamObj?.src;
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
                <ManagerCard
                  name={playerName}
                  totalRankMean={totalRankMean}
                  src={favouriteTeamSrc}
                />
              </div>
              <div className="mx-auto flex flex-1 justify-center ">
                <ManagerCard
                  name={enemyName}
                  totalRankMean={enemyTotalRankMean}
                  src={enemyFavouriteTeamSrc}
                />
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};
export default CompareDetails;
