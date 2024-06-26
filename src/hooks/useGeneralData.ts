import useSWR from 'swr';
import { API_ENDPOINTS, BASE_URL } from '../../api/endpoints';
import { fetcher } from '../lib/fetcher';

import { IGeneralData } from '../types/general/generalData';
export const useGeneralData = () => {
  const { data: generalData, isValidating: isLoadingGeneralData } =
    useSWR<IGeneralData>(`${BASE_URL}/${API_ENDPOINTS.general}`, fetcher);
  const generalGameweekData = generalData?.events?.map((gameWeek) => ({
    ...gameWeek,
    average_entry_score: gameWeek.average_entry_score,
  }));
  return {
    generalData,
    isLoadingGeneralData,
    generalGameweekData,
  };
};
