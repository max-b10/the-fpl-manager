import useSWR from 'swr';
import { API_ENDPOINTS } from '../../api/endpoints';
import { fetcher } from '../lib/fetcher';

import { IGeneralData } from '../types/general/generalData';
export const useGeneralData = () => {
  const { data: generalData, isValidating: isLoadingGeneralData } =
    useSWR<IGeneralData>(
      `http://localhost:3005/${API_ENDPOINTS.general}`,
      fetcher
    );

  return {
    generalData,
    isLoadingGeneralData,
  };
};
