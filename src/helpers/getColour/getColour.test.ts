import { it, expect, describe } from 'vitest';
import { getColour } from './getColour';

describe('getColour', () => {
  it('should return the correct colour based on the average rank', () => {
    expect(getColour(5000)).toBe('#0000FF'); // Blue
    expect(getColour(50000)).toBe('#006400'); // Dark Green
    expect(getColour(150000)).toBe('#008000'); // Green
    expect(getColour(300000)).toBe('#ADFF2F'); // Light Green
    expect(getColour(750000)).toBe('#FFFF00'); // Yellow
    expect(getColour(2000000)).toBe('#FFA500'); // Orange
    expect(getColour(4000000)).toBe('#FF0000'); // Red
    expect(getColour(6000000)).toBe('#8B0000'); // Dark Red
  });
});
