function oddCount(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    if (i < n && i % 2 !== 0) {
      result.push(i);
    }
  }
  return result.length;
  //   retun Math.floor(n/2) this is the easiest way to do this challenge
}
