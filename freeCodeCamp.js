// get the last letter in string

const allString = 'Your test output will go here'
const lastLetterOfAllString = allString[allString.length - 1]
// console.log(lastLetterOfAllString)// output will be e

// get the value of the third-to-last letter
// console.log(allString[allString.length - 3]) output e
// ------------------------------------------------------------------------------
// An easy way to append data to the end of an array is via the push() function.
// ------------------------------------------------------------------------------

const myArray = [
  ['Jonh', 23],
  ['cat', 2],
] //Push ["dog", 3] onto the end of the myArray variable.
myArray.push(['dog', 3])
console.log(myArray)
// -----------------------------------------------------------------------
// Another way to change the data in an array is with the .pop() function.
// .pop() is used to pop a value off of the end of an array
// -----------------------------------------------------------------------
myArray.pop()
console.log(myArray)

// pop() always removes the last element of an array. What if you want to remove the first?
// That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.
const removeFirstEleInMyArray = myArray.shift()

// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

function scope1() {
  var top = 'top'
  bottom = 'bottom'
  console.log(bottom)
  var bottom
}
scope1()
