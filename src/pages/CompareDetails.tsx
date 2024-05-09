import { useSelector } from 'react-redux';
import { useCheckId } from '../hooks/useCheckId';
import { RootState } from '../state/store';
import { useNavigate, useParams } from 'react-router-dom';
import { useManagerData } from '../hooks/useManagerData';
import Header from '../components/Header';
import { LoaderIcon } from 'lucide-react';
import ManagerCard from '../components/Cards/ManagerCard';
import { useNavigationWithId } from '../hooks/useNavigationWithId';
import { useEnemyManagerData } from '../hooks/useEnemyManagerData';

const CompareDetails = () => {
  const navigate = useNavigate();
  const handleSubmit = useNavigationWithId();
  const { id } = useParams();
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const { playerName, totalRankMean, favouriteTeamSrc } = useManagerData(fplId);
  const {
    enemyName,
    enemyTotalRankMean,
    enemyFavouriteTeamSrc,
    isLoadingEnemyData,
    isLoadingEnemyHistory,
  } = useEnemyManagerData(Number(id));

  useCheckId();

  return (
    <>
      {isLoadingEnemyData || isLoadingEnemyHistory ? (
        <div className="flex min-h-screen items-center justify-center">
          <LoaderIcon className="animate-spin" />
        </div>
      ) : (
        <>
          <Header
            headerText={''}
            showBackIcon={true}
            onBackClick={() => navigate('/managercomparison')}
          />
          <main>
            <div className="mt-10 flex flex-col items-center px-4 md:flex-row md:justify-center md:px-0">
              <div className="flex flex-1 justify-center">
                <ManagerCard
                  id={id}
                  name={playerName}
                  totalRankMean={totalRankMean}
                  src={favouriteTeamSrc}
                  onSubmit={handleSubmit}
                  showIcon={false}
                />
              </div>
              <div>vs</div>
              <div className="mx-auto flex flex-1 justify-center ">
                <ManagerCard
                  id={id}
                  name={enemyName}
                  totalRankMean={enemyTotalRankMean}
                  src={enemyFavouriteTeamSrc}
                  onSubmit={handleSubmit}
                  showIcon={true}
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
