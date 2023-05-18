const strings = ["a", "b", "c", "d"];

// Access an array has a big O of O(1)
// Search into in array has a big O of O(n)
// Insert into array has a big O of O(n)
// Delete from array has a big O of O(n)

strings[0]; // O(1) // a => here there is no loop the computer knows where the value we want to access is stored.
strings.push("e", "k"); // O(1) -> ["a", "b", "c", "d","e"] here as well we are not looping through the strings array we just add something at the end of the strings array;

strings.pop(); // delete the last element. O(1)
strings.unshift("first"); // add the first index, O(n)-< here we have to loop over the array to change the indexes of items.
strings.shift(); // delete the first element. O(n)-> here is O(n) because we have to modify the index of our array

strings.splice(Math.floor(strings.length / 2), 0, "|"); // the big O here is O(n) why because the have again to loop over the array to change the indexes of items.

console.log(strings);

let arr = ["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"];

console.log([9, 4, 5, 64, 3, 4, 5].sort((a, b) => a - b));
console.log(arr.sort((a, b) => a.localeCompare(b)));
