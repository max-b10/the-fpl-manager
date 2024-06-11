import useSWR from 'swr';
import { IManagerHistory } from '../types/manager/managerHistory';
import { API_ENDPOINTS, BASE_URL } from '../../api/endpoints';
import { fetcher } from '../lib/fetcher';

export const useManagerHistoryData = (fplId: number) => {
  const { data: managerHistory, isValidating: isLoadingManagerHistory } =
    useSWR<IManagerHistory>(
      `${BASE_URL}/${API_ENDPOINTS.managerHistory}/${fplId}`,
      fetcher
    );

  const pastSeasonsData = managerHistory?.past;
  const gameWeekHistoryData = managerHistory?.current;

  const bestSeason = pastSeasonsData
    ? [...pastSeasonsData].sort((a, b) => a.rank - b.rank)[0]
    : undefined;
  const worstSeason = pastSeasonsData
    ? [...pastSeasonsData].sort((a, b) => b.rank - a.rank)[0]
    : undefined;

  const bestRank = bestSeason?.rank;
  const worstRank = worstSeason?.rank;
  const bestSeasonName = bestSeason?.season_name;
  const worstSeasonName = worstSeason?.season_name;
  const seasonsPlayed = pastSeasonsData?.length;
  const lowestPoints = pastSeasonsData
    ? Math.min(...pastSeasonsData.map((season) => season.total_points))
    : 0;
  const highestPoints = pastSeasonsData
    ? Math.max(...pastSeasonsData.map((season) => season.total_points))
    : 0;

  return {
    pastSeasonsData,
    gameWeekHistoryData,
    isLoadingManagerHistory,
    bestSeason,
    worstSeason,
    bestRank,
    worstRank,
    bestSeasonName,
    worstSeasonName,
    seasonsPlayed,
    lowestPoints,
    highestPoints,
  };
};
