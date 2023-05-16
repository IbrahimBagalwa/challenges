function logPairs(array) {
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      finalArray.push(array[i], array[j]);
    }
  }
  return finalArray;
}

console.log(logPairs([1, 2, 3, 4, 5]));
