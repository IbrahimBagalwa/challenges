const groceries = ['🍌', '🍎', '🍍', '🍐'];
const username = ['Ibrahim', 'Bagalwa'];
// console.log(groceries[groceries.length - 1]);
// push method adds one or more things at this end of array and returns the new length of array
// console.log(groceries);
groceries.push('🍊');
groceries.push('🫐');
// console.log(groceries);

// slice method returns  the portion of the array you want in the new array
// start to 0 inclusive and up to 3
// console.log(groceries.slice(3, 6));
// console.log(groceries.slice(1, 4));

// indexOf method returns the index of the element
// console.log(groceries.indexOf('🍊'));
groceries.pop(); //delete yhe last index of array
// console.log(groceries);

groceries.shift(); //delete the first element
// console.log(groceries);

groceries.unshift('🥑'); //adds the first element
// console.log(groceries);

groceries.forEach((item) => {
  //   console.log(item);
});
