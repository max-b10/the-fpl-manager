import useSWR from 'swr';
import { IManagerHistory } from '../types/manager/managerHistory';
import { fetcher } from '../lib/fetcher';
import { API_ENDPOINTS, BASE_URL } from '../../api/endpoints';
import { IManagerData } from '../types/manager/managerData';
import teamMapping from '../constants/teamMapping';
import { calculateMeanRank } from '../helpers/calculateMean';

export const useEnemyManagerData = (enemyId: number) => {
  const { data: enemyData, isValidating: isLoadingEnemyData } =
    useSWR<IManagerData>(
      `${BASE_URL}/${API_ENDPOINTS.manager}/${enemyId}`,
      fetcher
    );
  const { data: enemyHistory, isValidating: isLoadingEnemyHistory } =
    useSWR<IManagerHistory>(
      `${BASE_URL}/${API_ENDPOINTS.managerHistory}/${enemyId}`,
      fetcher
    );
  const enemyPastSeasonsData = enemyHistory?.past?.map((season) => ({
    ...season,
    season_name: season.season_name,
    total_points: season.total_points.toLocaleString(),
    rank: season.rank.toLocaleString(),
  }));
  const enemyFavouriteTeamObj = teamMapping.find(
    (team) => team.id === enemyData?.favourite_team
  );
  const enemyBestSeason = enemyPastSeasonsData
    ? enemyPastSeasonsData.reduce((prev, current) =>
        prev.rank < current.rank ? prev : current
      )
    : null;
  const enemyBestRank = enemyBestSeason
    ? enemyBestSeason.rank.toLocaleString()
    : 'N/A';

  return {
    enemyName: `${enemyData?.player_first_name} ${enemyData?.player_last_name}`,
    enemyPastSeasonsData,
    enemySeasonsPlayed: enemyHistory?.past?.length
      ? Number(enemyHistory.past.length) + 1
      : 1,
    enemyTotalRankMean: calculateMeanRank(
      enemyHistory?.past,
      enemyData?.summary_overall_rank
    ),
    enemyFavouriteTeamSrc: enemyFavouriteTeamObj?.src,
    isLoadingEnemyData,
    isLoadingEnemyHistory,
    enemyBestSeason,
    enemyBestRank,
  };
};
