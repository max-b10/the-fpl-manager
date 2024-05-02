import useSWR from 'swr';
import { IManagerHistory } from '../types/manager/managerHistory';
import { fetcher } from '../lib/fetcher';
import { API_ENDPOINTS } from '../../api/endpoints';
import { IManagerData } from '../types/manager/managerData';
import teamMapping from '../constants/teamMapping';
import { calculateMeanRank } from '../helpers/calculateMean';

export const useEnemyManagerData = (enemyId: number) => {
  const { data: enemyData, isValidating: isLoadingEnemyData } =
    useSWR<IManagerData>(
      `http://localhost:3005/${API_ENDPOINTS.manager}/${enemyId}`,
      fetcher
    );
  const { data: enemyHistory, isValidating: isLoadingEnemyHistory } =
    useSWR<IManagerHistory>(
      `http://localhost:3005/${API_ENDPOINTS.managerHistory}/${enemyId}`,
      fetcher
    );
  const enemyPastSeasonsData = enemyHistory?.past;
  const enemyTotalRankMean = calculateMeanRank(enemyPastSeasonsData);

  const enemyName = `${enemyData?.player_first_name} ${enemyData?.player_last_name}`;
  const enemyFavouriteTeamId = enemyData?.favourite_team;
  const enemyFavouriteTeamObj = teamMapping.find(
    (team) => team.id === enemyFavouriteTeamId
  );
  const enemyFavouriteTeamSrc = enemyFavouriteTeamObj?.src;

  return {
    enemyName,
    enemyTotalRankMean,
    enemyFavouriteTeamSrc,
    isLoadingEnemyData,
    isLoadingEnemyHistory,
  };
};
