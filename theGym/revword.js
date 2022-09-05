function reverseWord(str) {
  let word = '';
  for (let i = str.length - 1; i >= 0; i--) {
    word = word + str[i];
  }
  return word;
}
console.log(reverseWord('Hello'));
console.log('Hello' + 5 * 10);
