function reverseWord(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString.split(" ").reverse().join(" ");
}
console.log(reverseWord("The quick brown fox jumps over the lazy dog."));
