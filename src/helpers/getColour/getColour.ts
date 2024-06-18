export const getColour = (averageRank: number) => {
  if (averageRank <= 10000) {
    return '#0000FF'; // Blue
  } else if (averageRank <= 100000) {
    return '#006400'; // Dark Green
  } else if (averageRank <= 200000) {
    return '#008000'; // Green
  } else if (averageRank <= 500000) {
    return '#ADFF2F'; // Light Green
  } else if (averageRank <= 1000000) {
    return '#FFFF00'; // Yellow
  } else if (averageRank <= 2500000) {
    return '#FFA500'; // Orange
  } else if (averageRank <= 5000000) {
    return '#FF0000'; // Red
  } else {
    return '#8B0000'; // Dark Red
  }
};
