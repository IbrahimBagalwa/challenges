/*
    Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:
Example(Input --> Output)
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/

// indexOf return 1el that we gi indc  and findIndex 1elmnt that ma with cond
function findNeedle(haystack) {
  // your code here
  const needle = (element) => element === 'needle';
  const indx = haystack.findIndex(needle);
  console.log('textoutput: ', indx);
  if (indx !== -1) {
    return `found the needle at position ${indx}`;
  } else {
    return 'something went wrong in our array';
  }
}
// console.log(findNeedle(['hay', 'hay', 'hay', 'moreJunk', 'randomJunk']));

/*
    Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/
function find_average(array) {
  // your code here
  const sum = array.reduce((a, b) => a + b, 0);
  const lengthArray = array.length;
  let total = 0;

  if (lengthArray) {
    total = sum / lengthArray;
  }
  return total;
}
console.log(find_average([]));

/*
    Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/
function boolToWord(bool) {
  //...
  return bool === true ? 'Yes' : 'No';
}
// console.log(boolToWord(false  elements of an array in place and returns the reference to the same array, now sorted));
/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
function moveZeros(arr) {
  const newArr = [];
  const srt = arr.sort((a, b) => a + b);
  let check = srt.includes(0);
  if (check) {
    const remv = srt.filter((el) => el !== 0);
    const zero = srt.filter((el) => el === 0);
    newArr.unshift(remv);
    newArr.push(zero);
  } else {
    newArr.push(srt);
  }
  return newArr.flatMap((el) => el);
}
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
// [[false, 1 2 1], [0,0]]

var result = 12;
for (var i = result - 1; i >= 1; i--) {
  result = result * i;
}
console.log(result);
