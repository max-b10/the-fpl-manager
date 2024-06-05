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

  const pastSeasonsData = managerHistory?.past?.map((season) => ({
    ...season,
    season_name: season.season_name,
    total_points: season.total_points.toLocaleString(),
    rank: season.rank.toLocaleString(),
  }));

  const gameWeekHistoryData = managerHistory?.current?.map((gameWeek) => ({
    ...gameWeek,
    event: gameWeek.event,
    Points: gameWeek.points,
    total_points: gameWeek.total_points,
    rank: gameWeek.rank,
    overall_rank: gameWeek.overall_rank,
  }));

  const bestSeason = managerHistory?.past
    ? managerHistory.past.reduce((prev, current) =>
        prev.rank < current.rank ? prev : current
      )
    : null;

  const worstSeason = managerHistory?.past
    ? managerHistory.past.reduce((prev, current) =>
        prev.rank > current.rank ? prev : current
      )
    : null;

  const bestRank = bestSeason ? bestSeason.rank.toLocaleString() : 'N/A';
  const worstRank = worstSeason ? worstSeason.rank.toLocaleString() : 'N/A';
  const bestSeasonName = bestSeason ? bestSeason.season_name : 'N/A';
  const worstSeasonName = worstSeason ? worstSeason.season_name : 'N/A';

  const seasonsPlayed = managerHistory?.past
    ? managerHistory.past.length.toLocaleString()
    : 'N/A';

  const lowestPoints = managerHistory?.past
    ? Math.min(
        ...managerHistory.past.map((season) => season.total_points)
      ).toLocaleString()
    : 'N/A';

  const highestPoints = managerHistory?.past
    ? Math.max(
        ...managerHistory.past.map((season) => season.total_points)
      ).toLocaleString()
    : 'N/A';

  return {
    pastSeasonsData,
    gameWeekHistoryData,
    isLoadingManagerHistory,
    bestRank,
    worstRank,
    seasonsPlayed,
    lowestPoints,
    highestPoints,
    bestSeasonName,
    worstSeasonName,
  };
};
