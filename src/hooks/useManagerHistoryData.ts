import useSWR from 'swr';
import { IManagerHistory } from '../types/manager/managerHistory';
import { API_ENDPOINTS } from '../../api/endpoints';
import { fetcher } from '../lib/fetcher';

export const useManagerHistoryData = (fplId: number) => {
  const { data: managerHistory, isValidating: isLoadingManagerHistory } =
    useSWR<IManagerHistory>(
      `http://localhost:3005/${API_ENDPOINTS.managerHistory}/${fplId}`,
      fetcher
    );

  const pastSeasonsData = managerHistory?.past;
  return {
    pastSeasonsData,
    isLoadingManagerHistory,
  };
};
