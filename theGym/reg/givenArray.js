function hasPairWithSum(sum, arr) {
  let low = 0;
  let v;
  let high = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    v = arr[low] + arr[high] === sum;
  }
  return v;
}
console.log(hasPairWithSum(8, [1, 2, 4, 4]));
