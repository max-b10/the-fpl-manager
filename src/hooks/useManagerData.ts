import useSWR from 'swr';
import { IManagerData } from '../types/manager/managerData';
import { IManagerHistory } from '../types/manager/managerHistory';
import { API_ENDPOINTS, BASE_URL } from '../../server/endpoints';
import { fetcher } from '../lib/fetcher';
import {
  calculateMeanPoints,
  calculateMeanRank,
} from '../helpers/calculateMean/calculateMean';
import teamMapping from '../constants/teamMapping';
import { ISquad } from '../types/squad/squadPicks';

const useManagerDataFetch = (fplId: number) =>
  useSWR<IManagerData>(
    `${BASE_URL}/${API_ENDPOINTS.manager}/${fplId}`,
    fetcher
  );

const useManagerHistoryFetch = (fplId: number) =>
  useSWR<IManagerHistory>(
    `${BASE_URL}/${API_ENDPOINTS.managerHistory}/${fplId}`,
    fetcher
  );

const useSquadPicksFetch = (
  fplId: number,
  previousGameWeek: number | undefined
) =>
  useSWR<ISquad>(
    previousGameWeek !== undefined
      ? `${BASE_URL}/${API_ENDPOINTS.squadPicks}/${fplId}/${previousGameWeek}`
      : null,
    fetcher
  );

const getPreviousGameWeekData = (
  managerHistory: IManagerHistory | undefined,
  currentGameweek: number | undefined
) => {
  if (managerHistory?.current && currentGameweek !== undefined) {
    const previousGameWeek = managerHistory.current.find(
      (gameweek) =>
        gameweek.event === (currentGameweek === 1 ? 1 : currentGameweek - 1)
    );
    const previousGameWeekOverallRank = previousGameWeek?.overall_rank;
    const previousGameWeekScore = previousGameWeek?.points
      ? `${previousGameWeek.points} pts`
      : undefined;

    return {
      previousGameWeek,
      previousGameWeekOverallRank,
      previousGameWeekScore,
    };
  }
  return {
    previousGameWeekOverallRank: undefined,
    previousGameWeekScore: undefined,
    previousGameWeek: undefined,
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
  const {
    previousGameWeek,
    previousGameWeekOverallRank,
    previousGameWeekScore,
  } = getPreviousGameWeekData(managerHistory, currentGameweek);
  const rankDifference =
    (overallRank ?? 0) - (previousGameWeekOverallRank ?? 0);

  const { data: squadPicksData, isValidating: isLoadingSquadPicks } =
    useSquadPicksFetch(fplId, previousGameWeek?.event);
  const gameweekScore = eventPoints ? `${eventPoints} pts` : undefined;
  const gameweekRank = eventRank ? `${eventRank} rank` : undefined;
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
  const totalPoints = managerData?.summary_overall_points;
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
    previousGameWeek,
    previousGameWeekScore,
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
