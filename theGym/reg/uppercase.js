//  Write a JavaScript program to test the first character of a string is uppercase or not.
function uppercase(str) {
  return /^[A-Z]/.test(str);
}
console.log(uppercase("Hello World!"));
