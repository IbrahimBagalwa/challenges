function deleteNth(arr, n) {
  return arr.length
    ? arr.reduce(
        (acc, num, i) => {
          acc.found[num] = acc.found[num] ? ++acc.found[num] : 1;
          if (acc.found[num] <= n) acc.arr.push(num);
          return i === arr.length - 1 ? acc.arr : acc;
        },
        { found: {}, arr: [] }
      )
    : arr;
}
console.log(deleteNth([20, 37, 20, 21], 1));
