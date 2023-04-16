/**
 * Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.
 */
function removeConsecutiveRepetution(w) {
  // first solution with for loop
  /**
   * for loop solution
   * @param {
   * let strArray = w.split(" ");
   * let newArray = [];
   * for (let i = 0; i < strArray.length; i++) {
   * if (strArray[i] !== strArray[i + 1]) {
   * newArray.push(strArray[i]);
   * }
   * }
   * return newArray.join(" ");}
   */
  // with filter
  return (strArr = w
    .split(" ")
    .filter((element, index, arr) => element !== arr[index + 1])
    .join(" "));
}
console.log(
  removeConsecutiveRepetution(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);
