import { it, expect, describe } from 'vitest';
import { calculateMeanPoints, calculateMeanRank } from './calculateMean';
import { IPast } from '../../types/manager/managerHistory';

describe('calculateMean', () => {
  const mockData: IPast[] = [
    { season_name: '2018/19', total_points: 100, rank: 1 },
    { season_name: '2019/20', total_points: 200, rank: 2 },
    { season_name: '2020/21', total_points: 300, rank: 3 },
  ];

  it('should calculate the mean points correctly', () => {
    const result = calculateMeanPoints(mockData);
    expect(result).toBe(200);
  });

  it('should return undefined if the points array is empty', () => {
    const result = calculateMeanPoints([]);
    expect(result).toBeUndefined();
  });

  it('should calculate the mean rank correctly', () => {
    const result = calculateMeanRank(mockData, 10);
    expect(result).toBe(2);
  });

  it('should return the overall rank if the rank array is empty', () => {
    const result = calculateMeanRank([], 10);
    expect(result).toBe(10);
  });
});
