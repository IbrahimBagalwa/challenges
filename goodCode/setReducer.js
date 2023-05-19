function setReducer(input) {
  if (input.length == 1) return input[0];
  let newArr = [];
  for (let i = 0, counter = 1; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      counter += 1;
    } else {
      newArr.push(counter);
      counter = 1;
    }
  }
  return setReducer(newArr);
}
console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7]));

// 'hello'-> 'l'-> 2
// write an algorithm to get the maximum character in a string and how frequent that character appears
