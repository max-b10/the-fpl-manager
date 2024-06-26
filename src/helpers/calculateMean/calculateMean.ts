import { IPast } from '../../types/manager/managerHistory';

export const calculateMeanPoints = (
  arr: IPast[] | undefined
): number | undefined => {
  if (!arr || arr.length === 0) {
    return undefined;
  }

  const sum = arr.reduce((sum, season) => sum + season.total_points, 0);
  const mean = Math.floor(sum / arr.length);
  return mean;
};

export const calculateMeanRank = (
  arr: IPast[] | undefined,
  overallRank: number | undefined
): number | undefined => {
  if (!arr || arr.length === 0) {
    return overallRank;
  }

  const sum = arr.reduce((sum, season) => sum + season.rank, 0);
  const mean = Math.floor(sum / arr.length);
  return mean;
};
