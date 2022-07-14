// counting anagrams have the function countingAnagrams(str) take the str parameter and determine how many anagrams exist in the string. an anagram is a new word that is produced from rearranging the characters in a different word, for example: cars : arcs.
// your program should determine how many anagrams exist in a given string and return the total number.
// For example: if str is "cars are very cool so are arcs and my os" then your program should return 2 because "cars"and "arcs" form 1 anagram and "so" and "os" form a 2end anagram.

function countingAnagrams(str) {
  const word = new Set(str.split(/\s+/));
  let arr = [...word];
  let objct = {};
  let count = 0;
  arr.map((w) => {
    let key = w.split('').sort().join('');
    // l'anagram n'exist pas il aura la mm key donc chaque fois que la key est disponible dans objct el sera update
    if (key in objct) {
      count += 1;
    } else {
      objct[key] = true; //true just por rendre disponible key dans objct
    }
  });

  return count;
}
// const trs = 'world words';
// console.log(trs.split(''));
console.log(countingAnagrams('marie aimer is his or si'));

function fizzBuzzz() {
  let num;
  for (num = 1; num <= 50; num++) {
    if (num % 15 === 0) console.log('FizzBuzz' + ' ');
    else if (num % 3 === 0) console.log('Fizz' + ' ');
    else if (num % 5 === 0) console.log('Buzz' + ' ');
    else console.log(num + ' ');
  }
}

// console.log(fizzBuzzz(7));
