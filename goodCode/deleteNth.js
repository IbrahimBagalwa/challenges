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
// console.log(deleteNth([20, 37, 20, 21], 1));

function commonItems(ar1, ar2) {
  let result = false;
  for (let i = 0; i < ar1.length; i++) {
    result = ar2.includes(ar1[i]);
  }
  return result;
}
const containCommonItems = (array1, array2) =>
  array1.some((value) => array2.includes(value));
