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

// Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp]
  }
  return 'Not Found'
  // Only change code above this line
}
// console.log({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift')
/*
You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
Note: A copy of the recordCollection object is used for the tests.
*/

var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
}

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== '') {
    records[id][prop] = value
  } else if (
    prop === 'tracks' &&
    records[id].hasOwnProperty('tracks') === false
  ) {
    records[id][prop] = [value]
  } else if (prop === 'tracks' && value !== '') {
    records[id][prop].push(value)
  } else if (value === '') {
    delete records[id][prop]
  }
  return records
}

// updateRecords(recordCollection, 5439, 'artist', 'ABBA')

const myArrays = []
let num = 5
while (num >= 0) {
  myArrays.push(num)
  num--
}
console.log(myArrays)
