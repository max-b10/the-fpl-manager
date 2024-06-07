export const getColour = (rank: number) => {
  if (rank <= 10000) {
    return '#5EC26A';
  } else if (rank > 10000 && rank <= 100000) {
    return '#356639';
  } else if (rank > 100000 && rank <= 1000000) {
    return '#FFA500';
  } else {
    return '#FF0000';
  }
};
