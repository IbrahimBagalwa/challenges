/*
    The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

        For example:

        1.08 --> 30

    Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/
function cockroachSpeed(s) {
  //Good Luck!
  let valueCmPerSecond = 27.777777777778;
  let resultToCmPerSecond = 0;
  if (s >= 0) {
    resultToCmPerSecond = s * valueCmPerSecond;
  }
  return Math.floor(resultToCmPerSecond);
}

// console.log(cockroachSpeed(1.08));

/*
    Write a function to split a string and convert it into an array of words.

    Examples (Input ==> Output):
    "Robin Singh" ==> ["Robin", "Singh"]

    "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

*/
function stringToArray(string) {
  // code code code

  return string.split(' ');
}
console.log(stringToArray('Ibrahim Bagalwa'));

/*
    You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

    Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

    For example, when the input is green, output should be yellow.
*/

function updateLight(current) {
  //your code here!
  let lights = ['green', 'yellow', 'red'];
  switch (current) {
    case lights[0]:
      current = lights[1];
      break;
    case lights[1]:
      current = lights[2];
      break;
    case lights[2]:
      current = lights[0];
    default:
      current = lights[0];
      break;
  }
  return current;
}
// console.log(updateLight('red'));

function validatePIN(pin) {
  //return true or false
  //   if (pin.chartCodeAt(48))
  if (pin.length == 4 || pin.length == 6) {
    return true;
  } else {
    return false;
  }
}
// console.log(validatePIN('1234'));
function iterate() {
  var x = 10;
  while (x <= 25) {
    console.log('Printing out x = ' + x);
    x = x + 2;
  }
}
console.log(iterate());
