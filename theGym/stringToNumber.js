const arr = (N) => {
  const arr = [];

  for (let i = 0; i < N; i += 1) {
    arr.push(i);
  }

  return arr;
};
// console.log(arr(7));

const squares = (n) => {
  const newArray = [];
  for (let i = 1; i <= n; i += 1) {
    newArray.push(i * i);
  }
  return newArray;
};
// console.log(squares(5));

const range = (n, start, step) => {
  const newArray = [];
  for (let i = start; i <= n; i += step) {
    newArray.push(i);
  }
  return newArray;
};
console.log(range(6, 3, 2));
