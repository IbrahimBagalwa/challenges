function squareSums(n) {
  // Check if n is valid
  if (n < 1 || n > 1000) {
    return [];
  }

  // Create an array to store the results
  const results = [];

  // Iterate over all numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    // Find the smallest square that is greater than or equal to i
    let smallestSquare = Math.floor(Math.sqrt(i));

    // If there is no such square, then there is no solution
    if (smallestSquare * smallestSquare < i) {
      return [];
    }

    // Add the smallest square to the results array
    results.push(smallestSquare);

    // Remove the smallest square from the range of numbers to consider
    i -= smallestSquare;
  }

  // Return the results array
  return results;
}
console.log(squareSums(15));
