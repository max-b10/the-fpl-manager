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

export const useManagerData = (fplId: number) => {
  const { data: managerData, isValidating: isLoadingManagerData } =
    useSWR<IManagerData>(
      `http://localhost:3005/${API_ENDPOINTS.manager}/${fplId}`,
      fetcher
    );
  const { data: managerHistory, isValidating: isLoadingManagerHistory } =
    useSWR<IManagerHistory>(
      `http://localhost:3005/${API_ENDPOINTS.managerHistory}/${fplId}`,
      fetcher
    );

  const playerName = `${managerData?.player_first_name} ${managerData?.player_last_name}`;
  const teamName = managerData?.name;
  const regionName = managerData?.player_region_name;

  const previousWeek =
    managerHistory?.current?.[managerHistory.current.length - 2];
  const previousWeekOverallRank = previousWeek?.overall_rank;
  const rankDifference =
    (managerData?.summary_overall_rank ?? 0) - (previousWeekOverallRank ?? 0);
  const currentGameweek = managerData?.current_event;
  const previousGameweek = managerData?.current_event
    ? managerData.current_event - 1
    : undefined;
  const { data: squadPicksData, isValidating: isLoadingSquadPicks } =
    useSWR<ISquad>(
      previousGameweek !== undefined
        ? `http://localhost:3005/${API_ENDPOINTS.squadPicks}/${fplId}/${previousGameweek}`
        : null,
      fetcher
    );
  const gameweekScore = managerData?.summary_event_points
    ? `${managerData.summary_event_points} pts`
    : undefined;
  const gameweekRank = managerData?.summary_event_rank
    ? `${managerData.summary_event_rank.toLocaleString()} rank`
    : undefined;
  const previousGameweekScore = managerHistory?.current?.[
    managerHistory.current.length - 2
  ]?.points
    ? `${managerHistory.current[managerHistory.current.length - 2].points} pts`
    : undefined;
  const totalPointsMean = calculateMeanPoints(managerHistory?.past);
  const totalRankMean = calculateMeanRank(managerHistory?.past);
  const favouriteTeamId = managerData?.favourite_team;
  const favouriteTeamObj = teamMapping.find(
    (team) => team.id === favouriteTeamId
  );
  const favouriteTeam = favouriteTeamObj?.name;
  const favouriteTeamSrc = favouriteTeamObj?.src;
  const overallLeague = managerData?.leagues?.classic?.find(
    (league) => league.name === 'Overall'
  );
  const totalPlayers = overallLeague?.rank_count;
  const currentSquad = squadPicksData?.picks;
  const managerClassicLeagues = managerData?.leagues.classic.slice(5);
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
    totalPointsMean,
    totalRankMean,
    favouriteTeam,
    favouriteTeamSrc,
    totalPlayers,
    currentSquad,
    managerClassicLeagues,
  };
};
