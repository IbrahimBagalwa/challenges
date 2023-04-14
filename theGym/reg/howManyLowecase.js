/**
 *
 * @param {our task is simply to count the total number of lowercase letters in a string.
 * Examples
 * lowercaseCount("abc"); ===> 3
 * lowercaseCount("abcABC123"); ===> 3
 * lowercaseCount`("abcABC123!@€£#$%^&*()_-+=[]|\':;?/>.<,~"); ===> 3`
 * lowercaseCount(""); ===> 0;
 * lowercaseCount("ABC123!@€£#$%^&*()_-+=[]|\':;?/>.<,~"); ===> 0
 * lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26}
 * @returns
 */
function lowercaseCount(str) {
  return str.replace(/[^a-z]/g, "").length;
}
console.log(lowercaseCount("abcABC123"));
