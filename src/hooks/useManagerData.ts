import useSWR from 'swr';
import { IManagerData } from '../types/manager/managerData';
import { IManagerHistory } from '../types/manager/managerHistory';
import { API_ENDPOINTS } from '../../api/endpoints';
import { fetcher } from '../lib/fetcher';
import {
  calculateMeanPoints,
  calculateMeanRank,
} from '../helpers/calculateMean';
import teamMapping from '../constants/teamMapping';
import { ISquad } from '../types/squad/squadPicks';

const useManagerDataFetch = (fplId: number) =>
  useSWR<IManagerData>(
    `http://localhost:3005/${API_ENDPOINTS.manager}/${fplId}`,
    fetcher
  );

const useManagerHistoryFetch = (fplId: number) =>
  useSWR<IManagerHistory>(
    `http://localhost:3005/${API_ENDPOINTS.managerHistory}/${fplId}`,
    fetcher
  );

const useSquadPicksFetch = (
  fplId: number,
  previousGameweek: number | undefined
) =>
  useSWR<ISquad>(
    previousGameweek !== undefined
      ? `http://localhost:3005/${API_ENDPOINTS.squadPicks}/${fplId}/${previousGameweek}`
      : null,
    fetcher
  );

const getPreviousWeekData = (
  managerHistory: IManagerHistory | undefined,
  currentGameweek: number | undefined
) => {
  if (managerHistory?.current) {
    const previousWeekIndex =
      currentGameweek === 38
        ? managerHistory.current.length - 1
        : managerHistory.current.length - 2;
    const previousWeek = managerHistory.current[previousWeekIndex];
    const previousWeekOverallRank = previousWeek?.overall_rank;
    const previousGameweekScore = previousWeek?.points
      ? `${previousWeek.points} pts`
      : undefined;
    return { previousWeekOverallRank, previousGameweekScore };
  }
  return {
    previousWeekOverallRank: undefined,
    previousGameweekScore: undefined,
  };
};

export const useManagerData = (fplId: number) => {
  const { data: managerData, isValidating: isLoadingManagerData } =
    useManagerDataFetch(fplId);
  const { data: managerHistory, isValidating: isLoadingManagerHistory } =
    useManagerHistoryFetch(fplId);

  const {
    player_first_name: firstName,
    player_last_name: lastName,
    name: teamName,
    player_region_name: regionName,
    summary_overall_rank: overallRank,
    current_event: currentGameweek,
    summary_event_points: eventPoints,
    summary_event_rank: eventRank,
    favourite_team: favouriteTeamId,
    leagues,
  } = managerData || {};

  const playerName = `${firstName} ${lastName}`;
  const { previousWeekOverallRank, previousGameweekScore } =
    getPreviousWeekData(managerHistory, currentGameweek);
  const rankDifference = (overallRank ?? 0) - (previousWeekOverallRank ?? 0);
  const previousGameweek =
    currentGameweek === 38
      ? 38
      : currentGameweek
        ? currentGameweek - 1
        : undefined;
  const { data: squadPicksData, isValidating: isLoadingSquadPicks } =
    useSquadPicksFetch(fplId, previousGameweek);
  const gameweekScore = eventPoints ? `${eventPoints} pts` : undefined;
  const gameweekRank = eventRank
    ? `${eventRank.toLocaleString()} rank`
    : undefined;
  const totalPointsMean = calculateMeanPoints(managerHistory?.past);
  const totalRankMean = calculateMeanRank(managerHistory?.past, overallRank);
  const favouriteTeamObj = teamMapping.find(
    (team) => team.id === favouriteTeamId
  );
  const favouriteTeam = favouriteTeamObj?.name;
  const favouriteTeamSrc = favouriteTeamObj?.src;
  const overallLeague = leagues?.classic?.find(
    (league) => league.name === 'Overall'
  );
  const totalPlayers = overallLeague?.rank_count;
  const currentSquad = squadPicksData?.picks;
  const managerClassicLeagues = leagues?.classic.slice(5);
  const managerSeasonsPlayed = managerHistory?.past?.length
    ? Number(managerHistory.past.length) + 1
    : 1;
  const totalPoints = managerData?.summary_overall_points.toLocaleString();
  const bestFinish = managerHistory?.past?.reduce((prev, current) => {
    return prev.rank < current.rank ? prev : current;
  }).rank;

  return {
    playerName,
    teamName,
    regionName,
    managerData,
    isLoadingManagerData,
    isLoadingManagerHistory,
    isLoadingSquadPicks,
    rankDifference,
    currentGameweek,
    previousGameweek,
    previousGameweekScore,
    gameweekScore,
    gameweekRank,
    totalPoints,
    totalPointsMean,
    totalRankMean,
    favouriteTeam,
    favouriteTeamSrc,
    totalPlayers,
    currentSquad,
    managerClassicLeagues,
    managerSeasonsPlayed,
    bestFinish,
  };
};
