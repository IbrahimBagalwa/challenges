// formule F = C * 1.8 + 32
function celiciusToFahrenheit() {
  let fahrenheit = 0;
  let celicius = 12;
  fahrenheit = celicius * 1.8 + 32;
  return fahrenheit;
}
console.log(celiciusToFahrenheit());

function alphabet() {
  let alphabet = 'a';
  for (let i = alphabet.charCodeAt(97); i <= alphabet.charCodeAt(122); i++) {
    alphabet = i;
  }
  return alphabet;
}
console.log(alphabet());
