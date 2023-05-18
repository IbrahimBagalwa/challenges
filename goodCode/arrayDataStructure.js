const strings = ["a", "b", "c", "d"];

// Access an array has a big O of O(1)
// Search into in array has a big O of O(n)
// Insert into array has a big O of O(n)
// Delete from array has a big O of O(n)

strings[0]; // O(1) // a => here there is no loop the computer knows where the value we want to access is stored.
strings.push("e"); // O(1) -> ["a", "b", "c", "d","e"] here as well we are not looping through the strings array we just add something at the end of the strings array;
strings.pop(); // delete the last element. O(1);
strings.unshift("first"); // add the first index, O(1)
strings.shift(); //O(1) delete the first element

console.log(strings);
