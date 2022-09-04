function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return arr;
}
console.log('Positive', positiveSum([1, -4, 7, 12]));

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log('all', sum([1, -4, 7, 12]));
