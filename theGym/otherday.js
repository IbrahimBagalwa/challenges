/*
    Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

    The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

*/

function toWeirdCase(string) {
  //TODO
  return string
    .split(' ')
    .map((w, i) =>
      w
        .split('')
        .map((w, i) => (i % 2 === 0 ? w.toUpperCase() : w.toLowerCase()))
        .join('')
    )
    .join(' ');
}
// console.log(toWeirdCase('string'));

function comp(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) return false;
  return (
    array1
      .map((x) => x * x)
      .sort()
      .toString() === array2.sort().toString()
  );
  //   console.log(array2);
  //your code here
  //   return JSON.stringify(array1.sort()) === JSON.stringify(array2.sort());
}
a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
// console.log(comp(a1, a2));
function facto(n) {
  for (let i = 1; i <= n; i--) {
    n = n * i;
  }
  return n;
}
/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" */
function duplicateEncode(word) {
  // ...
  const letters = word.toLowerCase().split('');
  const counts = letters.reduce(
    (ct, ltr) => ((ct[ltr] = (ct[ltr] || 0) + 1), ct),
    {}
  );
  return letters.map((letter) => (counts[letter] === 1 ? '(' : ')')).join('');
}
// console.log(duplicateEncode('Success'));

/*
    In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/
function printerError(s) {
  // your code
  var passingLetters = 'abcdefghijklm'.split(''); // a base array of acceptable letters
  var a = s.length; //this will be the denominator in the final result
  var i = 0; //index number for the while loop to pass throught the string
  var count = 0; //this will be the numerator in the final result

  while (i < a) {
    if (passingLetters.indexOf(s[i]) === -1) {
      count++;
    }
    i++;
  }
  return count + '/' + a;
}
let s = 'aaaxbbbbyyhwawiwjjjwwm';
// console.log(printerError(s));
num = 3;
for (var i = num - 1; i >= 1; i--) {
  num *= i;
}
// console.log(num);
function reverseMe(str) {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
// console.log(reverseMe('mba'));
function makeLine(lengthAst) {
  let ast = '';
  for (let i = 1; i <= lengthAst; i++) {
    ast += '* ';
  }
  return ast + '\n';
}
function buildTriangle(length) {
  let triangle = '';
  let i = 1;
  for (i = 1; i <= length; i++) {
    triangle = triangle + makeLine(i);
  }
  return triangle;
}
// console.log(buildTriangle(10));

// let jacob;
// console.log(jacob);

/*
  Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/
// indexOf return 1el that we gi indc
const onlyUnique = function (value, index, self) {
  return self.indexOf(value) === index;
};
function longest(s1, s2) {
  // your code
  return (s1 + s2).split('').filter(onlyUnique).sort().join('');
}
// console.log(longest('aretheyhere', 'yestheyarehere'));

/*
  Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/
function findOdd(A) {
  for (var i = 0; i < A.length; i++) {
    var count = 0;
    for (var l = 0; l < A.length; l++) {
      if (A[i] === A[l]) count++;
    }
    if (count % 2 !== 0) return A[i];
  }
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
/*
  Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/
function sumMul(n, m) {
  //your idea here
  let sum = 0;
  if (n > 0 && m > 0) {
    for (let i = n; i < m; i += n) {
      sum += i;
    }
    return sum;
  } else {
    return 'INVALID';
  }
}
console.log(sumMul(2, 9));
/*

*/
function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

/*
  Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 4
*/
function digPow(n, p) {
  // ...
  var sum = 0;
  var myArray = [];
  var holder = n;

  for (var i = n.toString().length - 1; i >= 0; i--) {
    myArray[i] = holder % 10;

    holder = Math.trunc(holder / 10);
    myArray[i] = Math.pow(myArray[i], p + i);
    sum += myArray[i];
  }

  if (sum % n == 0) {
    return sum / n;
  } else {
    return -1;
  }
}
// console.log(digPow(89, 1));
var test = [
  12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148,
  169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139,
];

// Write your code here
test.forEach(function (n, i, test) {
  if (n % 3 === 0) {
    test[i] = test[i] + 100;
  }
});
// console.log(test);

function myFunction(a) {
  return a.substring(0, a.length - 3);
}
// console.log(myFunction('abcdefv'));
// myFunction('continent');
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function createPhoneNumber(numbers) {
  numbers.unshift('(');
  numbers.splice(4, 0, ')', ' ');
  numbers.splice(9, 0, '-');
  return numbers.join('');
}
console.log(createPhoneNumber(a));
/*
  39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
  999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
  4 --> 0 (because 4 is already a one-digit number)
*/
function persistence(num) {
  //code me
  if (num.toString().length === 1) {
    return 0;
  }
  var mult = 1;
  var splitStr = num.toString().split('');
  for (var i = 0; i < splitStr.length; i++) {
    mult *= parseFloat(splitStr[i]);
  }
  return 1 + persistence(parseFloat(mult));
}
console.log(persistence(999));
