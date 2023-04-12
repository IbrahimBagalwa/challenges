function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let pointClas = classPoints.reduce((a, b) => a + b);
  let av = pointClas / classPoints.length;
  return yourPoints >= av;
}
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
