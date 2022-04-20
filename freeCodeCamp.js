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
// console.log(myArray)
// -----------------------------------------------------------------------
// Another way to change the data in an array is with the .pop() function.
// .pop() is used to pop a value off of the end of an array
// -----------------------------------------------------------------------
myArray.pop()
// console.log(myArray)

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
// scope1()

function foo(x) {
  if (x < 1) {
    return 'Less than one'
  } else if (x < 2) {
    return 'Less than two'
  } else {
    return 'Greater than or equal to two'
  }
}
function bar(x) {
  if (x < 2) {
    return 'Less than two'
  } else if (x < 1) {
    return 'Less than one'
  } else {
    return 'Greater than or equal to two'
  }
}
function orderMyLogic(val) {
  if (val < 5) {
    return 'less than 5'
  } else if (val < 10) {
    return 'less than 10'
  } else {
    return 'greater than or equal to 10'
  }
}
// console.log(bar(0, 'bar-----'), foo(0, '-------fooo---'))

const names = [
  'Hole-in-one!',
  'Eagle',
  'Birdie',
  'Par',
  'Bogey',
  'Double Bogey',
  'Go Home!',
]

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes - par === 1) {
    return 'Hole-in-one'
  } else if (strokes <= par - 2) {
    return 'Eagle'
  } else if (strokes === par - 1) {
    return 'Birdie'
  } else if (strokes === par) {
    return 'Par'
  } else if (strokes === par + 1) {
    return 'Bogey'
  } else if (strokes === par + 2) {
    return 'Double Bogey'
  } else {
    return 'Go Home'
  }

  // Only change code above this line
}

console.log(golfScore(5, 4))
