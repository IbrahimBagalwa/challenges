function reverseWord(str) {
  let word = '';
  for (let i = str.length - 1; i >= 0; i--) {
    word = word.concat(str[i]);
  }
  return word;
}

console.log(reverseWord('Hello'));
