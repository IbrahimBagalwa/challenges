function points(games) {
  let result = [];
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      result.push(3);
    } else if (games[i][0] === games[i][2]) result.push(1);
  }
  return result.reduce((a, b) => a + b, 0);
}

console.log(
  points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])
);
