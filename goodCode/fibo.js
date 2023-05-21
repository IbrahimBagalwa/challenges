function fibonacci(n) {
  let ar = [1, 1, 1];
  for (let i = 0; i < n; i++) {
    if (ar.length < n) {
      ar.push(ar[i] + ar[i + 1] + ar[i + 2]);
    } else return ar;
  }
  return ar;
}

console.log(fibonacci(10));
