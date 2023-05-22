function stay(numbers) {
  //   return numbers.reduce((a, b) => a ^ b);
  return numbers.find(
    (item) => numbers.indexOf(item) === numbers.lastIndexOf(item)
  );
}
console.log(stay([1, 1, 2]));
