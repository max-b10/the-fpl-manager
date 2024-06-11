import { useSelector } from 'react-redux';
import { useCheckId } from '../hooks/useCheckId';
import { RootState } from '../state/store';
import { useNavigate, useParams } from 'react-router-dom';
import { useManagerData } from '../hooks/useManagerData';
import Header from '../components/Headers/Header';
import { LoaderIcon } from 'lucide-react';
import { useEnemyManagerData } from '../hooks/useEnemyManagerData';
import { useManagerHistoryData } from '../hooks/useManagerHistoryData';
import MainContainer from '../components/Layout/MainContainer';
import CompareSection from '../components/CompareSection';

const CompareDetails = () => {
  const navigate = useNavigate();
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
  const { pastSeasonsData, bestRank, bestSeason } =
    useManagerHistoryData(fplId);
  const {
    enemyName,
    enemySeasonsPlayed,
    enemyTotalRankMean,
    enemyFavouriteTeamSrc,
    isLoadingEnemyData,
    isLoadingEnemyHistory,
    enemyPastSeasonsData,
    enemyBestRank,
    enemyBestSeason,
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
          <MainContainer>
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-center lg:flex-row lg:space-x-8">
              <CompareSection
                region={regionName || ''}
                id={id}
                name={playerName}
                seasonsPlayed={managerSeasonsPlayed}
                totalRankMean={totalRankMean}
                src={favouriteTeamSrc}
                slides={pastSeasonsData || []}
                bestRank={bestRank}
                bestSeason={bestSeason}
                isLeftColumn={true}
              />

              <CompareSection
                region={regionName || ''}
                id={id}
                name={enemyName}
                seasonsPlayed={enemySeasonsPlayed}
                totalRankMean={enemyTotalRankMean}
                src={enemyFavouriteTeamSrc}
                slides={enemyPastSeasonsData || []}
                bestRank={enemyBestRank}
                bestSeason={enemyBestSeason}
                isLeftColumn={false}
              />
            </div>
          </MainContainer>
        </>
      )}
    </>
  );
};
export default CompareDetails;
