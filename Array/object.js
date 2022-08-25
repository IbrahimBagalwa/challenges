const person = {
  name: 'Quazi',
  shirt: 'black',
  sold: 1000,
  credit: 500,
  netsold: function () {
    return person.sold - person.credit;
  },
};

function destructuration({ name, shirt, netsold }) {
  console.log(
    `${name} is drass up a ${shirt} shirt and my net sold is ${netsold()}`
  );
}
// destructuration(person);
let result = 0;
const howmanyLetters = (phrase) => {
  for (const index in phrase) {
    result = Number(index) + 1;
  }
  return { result };
};
const phrase = 'prompt is not defined whitout dom';
// console.log(howmanyLetters(phrase));

const nbr = [1, 2, 3, 4, 7, 6, 4, 1, 9, 8];
let rslt = 0;
// const sumArray = (numbers) => {
//   rslt = numbers.reduce((x, y) => x + y, 0);
//   return rslt;
// };
const sumOfArray = (numbers) => {
  for (const numb of numbers) {
    rslt += numb;
  }
  return rslt;
  //   for (let i = 0; i <= numbers.length; i++) {
  //     rslt = rslt + i;
  //   }
  //   return rslt;
};
// console.log(sumArray(nbr));
console.log(sumOfArray(nbr));
const maxInArray = (numbers) => {
  let max = numbers[0];
  for (let i = 0; i <= numbers.length; i++) {
    if (i > max) {
      max = i;
    }
  }
  return max;
};
const biggest = (numbers) => {
  let big = numbers[0];
  for (const number of numbers) {
    if (number > big) {
      big = number;
    }
  }
  return big;
};
console.log(biggest(nbr));

const letterFrequency = (str) => {
  let phrase = {};

  for (const letter of str) {
    if (letter in phrase) {
      phrase[letter] += 1;
    } else {
      phrase[letter] = 1;
    }
  }
  return phrase;
};

// console.log(letterFrequency('pause cafee'));

const wordFrequency = (str) => {
  let frequency = {};
  const wordSplit = str.split(' ');
  for (const word of wordSplit) {
    if (word in frequency) {
      frequency[word] += 1;
    } else {
      frequency[word] = 1;
    }
  }
  return frequency;
};

console.log(wordFrequency('lol what lol'));
