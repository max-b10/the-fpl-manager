export function calculateLinearPercentileRank(
  meanRank: number,
  totalPlayers: number = 10000000
): number {
  if (meanRank <= 0 || meanRank > totalPlayers) {
    throw new Error(
      'Mean rank must be greater than 0 and less than or equal to total players'
    );
  }

  // Calculate percentile
  const percentile = 1 - meanRank / totalPlayers;
  const percentileScore = parseFloat((percentile * 100).toFixed(1));

  return percentileScore;
}
