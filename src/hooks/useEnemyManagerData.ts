import useSWR from 'swr';
import { IManagerHistory } from '../types/manager/managerHistory';
import { fetcher } from '../lib/fetcher';
import { API_ENDPOINTS, BASE_URL } from '../../api/endpoints';
import { IManagerData } from '../types/manager/managerData';
import teamMapping from '../constants/teamMapping';
import {
  calculateMeanRank,
  calculateMeanPoints,
} from '../helpers/calculateMean/calculateMean';

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
  const enemyPastSeasonsData = enemyHistory?.past;
  const enemyFavouriteTeamObj = teamMapping.find(
    (team) => team.id === enemyData?.favourite_team
  );
  const enemyBestSeason = enemyPastSeasonsData
    ? enemyPastSeasonsData.reduce((prev, current) =>
        prev.rank < current.rank ? prev : current
      )
    : null;
  const enemyBestRank = enemyBestSeason ? enemyBestSeason.rank : 0;

  const enemyName = `${enemyData?.player_first_name} ${enemyData?.player_last_name}`;
  const enemySeasonsPlayed = enemyHistory?.past?.length
    ? Number(enemyHistory.past.length) + 1
    : 1;
  const enemyTotalRankMean = calculateMeanRank(
    enemyHistory?.past,
    enemyData?.summary_overall_rank
  );
  const enemyTotalPointsMean = calculateMeanPoints(enemyHistory?.past);
  const enemyFavouriteTeamSrc = enemyFavouriteTeamObj?.src;

  return {
    enemyName,
    enemyPastSeasonsData,
    enemySeasonsPlayed,
    enemyTotalRankMean,
    enemyTotalPointsMean,
    enemyFavouriteTeamSrc,
    isLoadingEnemyData,
    isLoadingEnemyHistory,
    enemyBestSeason,
    enemyBestRank,
  };
};
