import { useSelector } from 'react-redux';
import { useCheckId } from '../hooks/useCheckId';
import { RootState } from '../state/store';
import { useNavigate, useParams } from 'react-router-dom';
import { useManagerData } from '../hooks/useManagerData';
import Header from '../components/Headers/Header';
import { LoaderIcon } from 'lucide-react';
import ManagerProfile from '../components/ManagerProfile';
import { useNavigationWithId } from '../hooks/useNavigationWithId';
import { useEnemyManagerData } from '../hooks/useEnemyManagerData';
import HistoryCarousel from '../components/HistoryCarousel/HistoryCarousel';
import { useManagerHistoryData } from '../hooks/useManagerHistoryData';
import MainContainer from '../components/Layout/MainContainer';
import PieChart from '../components/Charts/PieChart';

const CompareDetails = () => {
  const navigate = useNavigate();
  const handleSubmit = useNavigationWithId();
  const { id } = useParams();
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const {
    playerName,
    totalRankMean,
    favouriteTeamSrc,
    managerSeasonsPlayed,
    regionName,
  } = useManagerData(fplId);
  const { pastSeasonsData, bestRank } = useManagerHistoryData(fplId);
  const {
    enemyName,
    enemySeasonsPlayed,
    enemyTotalRankMean,
    enemyFavouriteTeamSrc,
    isLoadingEnemyData,
    isLoadingEnemyHistory,
    enemyPastSeasonsData,
    enemyBestRank,
  } = useEnemyManagerData(Number(id));

  useCheckId();
  console.log(bestRank);
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
          <MainContainer>
            <div>
              <div>
                <ManagerProfile
                  id={id}
                  name={playerName}
                  region={regionName}
                  seasonsPlayed={managerSeasonsPlayed}
                  totalRankMean={totalRankMean}
                  src={favouriteTeamSrc}
                  onSubmit={handleSubmit}
                  showIcon={false}
                  reverse={false}
                />
              </div>
              <div>
                <HistoryCarousel slides={pastSeasonsData || []} />
              </div>
              <div className="h-[50vh]">
                <PieChart bestRank={bestRank}></PieChart>
              </div>
            </div>
            <div>
              <div>
                <ManagerProfile
                  id={id}
                  name={enemyName}
                  seasonsPlayed={enemySeasonsPlayed}
                  totalRankMean={enemyTotalRankMean}
                  src={enemyFavouriteTeamSrc}
                  onSubmit={handleSubmit}
                  showIcon={true}
                  reverse={true}
                />
              </div>
              <div>
                <HistoryCarousel slides={enemyPastSeasonsData || []} />
              </div>
              <div className="h-[50vh]">
                <PieChart bestRank={enemyBestRank}></PieChart>
              </div>
            </div>
          </MainContainer>
        </>
      )}
    </>
  );
};
export default CompareDetails;
