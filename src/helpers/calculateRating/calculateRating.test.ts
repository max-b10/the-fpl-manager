import { it, expect, describe } from 'vitest';
import { calculateLinearPercentileRank } from './calculateRating';

describe('calculateLinearPercentileRank', () => {
  it('should calculate the percentile rank correctly', () => {
    const result = calculateLinearPercentileRank(5000000, 10000000);
    expect(result).toBe(50.0);
  });

  it('should throw an error if mean rank is less than or equal to 0', () => {
    expect(() => calculateLinearPercentileRank(0, 10000000)).toThrow(
      'Mean rank must be greater than 0 and less than or equal to total players'
    );
  });

  it('should throw an error if mean rank is greater than total players', () => {
    expect(() => calculateLinearPercentileRank(10000001, 10000000)).toThrow(
      'Mean rank must be greater than 0 and less than or equal to total players'
    );
  });
});
