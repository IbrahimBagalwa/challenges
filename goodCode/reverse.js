function reversedStr(str) {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (/[aeiou]/.test(str[i])) {
      string += str + str[i];
    }
  }
  return string;
}
console.log(reversedStr("Hello"));
