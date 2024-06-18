import { it, expect, describe } from 'vitest';
import { stringToNumber } from './stringToNumber';

describe('stringToNumber', () => {
  it('should convert a string to a number', () => {
    const result = stringToNumber('1234');
    expect(result).toBe(1234);
  });

  it('should remove commas from the string before converting', () => {
    const result = stringToNumber('1,234');
    expect(result).toBe(1234);
  });

  it('should return NaN for non-numeric strings', () => {
    const result = stringToNumber('abc');
    expect(result).toBeNaN();
  });
});
