function reverseWords(str) {
  // Go for it
  let word = [];
  word = str.split("/s");
  let result = "";
  for(let i = 0; i<word.length; i++){
    return result = word[i].split("").reverse().join('').split(" ").reverse().join(' ');
  }
    // return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
console.log(reverseWords("This is an example!"));
/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.*/
function countPositivesSumNegatives(input) {
    let positiveNUms = 0;
    let negativeNums = 0;
    if(input === null || input.length ===0)return [];
    else input.forEach(num=>num > 0 ? positiveNUms++ : negativeNums +=num);
    return [positiveNUms, negativeNums];
    
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
