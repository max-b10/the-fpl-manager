import { useSelector } from 'react-redux';
import { useCheckId } from '../hooks/useCheckId';
import { RootState } from '../state/store';
import { useParams } from 'react-router-dom';
import { useManagerData } from '../hooks/useManagerData';
import { LoaderIcon } from 'lucide-react';
import { useEnemyManagerData } from '../hooks/useEnemyManagerData';
import { useManagerHistoryData } from '../hooks/useManagerHistoryData';
import MainContainer from '../components/Layout/MainContainer';
import CompareSection from '../components/CompareSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';
import { useNavigationWithId } from '../hooks/useNavigationWithId';

const CompareDetails = () => {
  const { id } = useParams();
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);

  const {
    playerName,
    totalRankMean,
    totalPointsMean,
    favouriteTeamSrc,
    managerSeasonsPlayed,
    regionName,
  } = useManagerData(fplId);
  const { pastSeasonsData, bestRank, bestSeason } =
    useManagerHistoryData(fplId);
  const {
    enemyName,
    enemySeasonsPlayed,
    enemyTotalRankMean,
    enemyTotalPointsMean,
    enemyFavouriteTeamSrc,
    isLoadingEnemyData,
    isLoadingEnemyHistory,
    enemyPastSeasonsData,
    enemyBestRank,
    enemyBestSeason,
  } = useEnemyManagerData(Number(id));
  const handleSubmit = useNavigationWithId();

  useCheckId();

  return (
    <>
      <Navbar handleSubmit={handleSubmit} />

      {isLoadingEnemyData || isLoadingEnemyHistory ? (
        <div className="flex min-h-screen items-center justify-center">
          <LoaderIcon className="animate-spin" />
        </div>
      ) : (
        <>
          <MainContainer>
            <div className="mx-4 mt-4 flex max-w-6xl flex-col items-center justify-center sm:mx-auto md:mt-0 lg:flex-row lg:space-x-8">
              <CompareSection
                region={regionName || ''}
                id={id}
                name={playerName}
                seasonsPlayed={managerSeasonsPlayed}
                totalRankMean={totalRankMean}
                totalPointsMean={totalPointsMean}
                src={favouriteTeamSrc}
                slides={pastSeasonsData || []}
                bestRank={bestRank || 0}
                bestSeason={
                  bestSeason || { season_name: '', total_points: 0, rank: 0 }
                }
                isLeftColumn={true}
                showUserIcon={false}
              />

              <CompareSection
                region={regionName || ''}
                id={id}
                name={enemyName}
                seasonsPlayed={enemySeasonsPlayed}
                totalRankMean={enemyTotalRankMean}
                totalPointsMean={enemyTotalPointsMean}
                src={enemyFavouriteTeamSrc}
                slides={enemyPastSeasonsData || []}
                bestRank={enemyBestRank || 0}
                bestSeason={
                  enemyBestSeason || {
                    season_name: '',
                    total_points: 0,
                    rank: 0,
                  }
                }
                isLeftColumn={false}
                showUserIcon={true}
              />
            </div>
          </MainContainer>
        </>
      )}
      <Footer />
    </>
  );
};
export default CompareDetails;
