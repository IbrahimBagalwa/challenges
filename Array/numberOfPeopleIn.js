function number(busStops) {
  let totalStayInBus = 0;
  let i = 0;
  while (busStops.length > i) {
    totalStayInBus += busStops[i][0];
    totalStayInBus -= busStops[i][1];
    i++;
  }
  return totalStayInBus;
}
console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
