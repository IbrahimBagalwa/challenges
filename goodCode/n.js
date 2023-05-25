const returnSingleDigit = (num) => num % 9;

console.log(returnSingleDigit(192));

const str = (str, letter) => {
  return str.split("").filter((it) => it === letter).length;
};
console.log(str("Hello", "l"));
