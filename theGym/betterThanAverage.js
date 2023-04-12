const betterThanAverage = (classPoints, yourPoints) =>
  yourPoints >= classPoints.reduce((a, b) => a + b) / classPoints.length;
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
