const myArray = [1, 2, 3, 4, 5];
let newArray = [];
// for (let i = 0; i < myArray.length; i++) {
//   newArray.push(myArray[i] + 1);
// }
// console.log("For Loop : " + newArray);

// console.log("Map array : " + myArray.map((item) => item + 1));

// for (let j = 0; j < myArray.length; j++) {
//   if (myArray[j] % 2 === 0) {
//     newArray.push(myArray[j]);
//   }
// }
// console.log(myArray);
// console.log("For Loop Filter : " + newArray);
// console.log("Filter myArray : " + myArray.filter((item) => item % 2 === 0));

function includeMethod(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) return true;
  }
  return false;
}
console.log(includeMethod(myArray, 2));
console.log(myArray.includes(2));