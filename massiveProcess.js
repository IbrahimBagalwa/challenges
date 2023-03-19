// Modify the code by creating a promise so that the can run asynchronously.
const massiveProcess = (num) => {
  return new Promise((resolve, reject) => {
    if (isNaN(num)) {
      reject("Please provide a valid number");
    } else {
      let result = 0;
      setTimeout(() => {
        for (let i = num ** 7; i >= 0; i--) {
          result += Math.atan(i) * Math.atan(i);
        }
        resolve(result);
      });
    }
  });
};
massiveProcess("oioi")
  .then((val) => {
    console.log("The number is: " + val);
  })
  .catch((err) => console.log(err));

massiveProcess(10)
  .then((val) => {
    console.log("The number is: " + val);
  })
  .catch((err) => console.log(err));
// More processing later on

console.log(5 * 5 + 100);
