import useSWR from 'swr';
import { fetcher } from '../lib/fetcher';
import { IGeneralData } from '../types/general/generalData';

export const useGeneralData = () => {
  const { data: generalData, isValidating: isLoadingGeneralData } =
    useSWR<IGeneralData>(
      '/https://fantasy.premierleague.com/api/bootstrap-static/',
      fetcher
    );
  const generalGameweekData = generalData?.events?.map((gameWeek) => ({
    ...gameWeek,
    average_entry_score: gameWeek.average_entry_score,
  }));
  console.log(generalData);
  return {
    generalData,
    isLoadingGeneralData,
    generalGameweekData,
  };
};
