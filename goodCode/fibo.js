function tribonacci(n) {
  let ar = [1, 1, 1];
  let otherCase = [];
  if (n < 1) return otherCase;
  if (n === 1 && ar[0] > 1) {
    return (otherCase = ar[0]);
  }
  if (n === 1 && ar[0] <= 1) {
    return (otherCase = [1]);
  }
  for (let i = 0; i < n; i++) {
    if (ar.length < n) {
      ar.push(ar[i] + ar[i + 1] + ar[i + 2]);
    } else return ar;
  }
  return ar;
}

console.log(tribonacci(0));
