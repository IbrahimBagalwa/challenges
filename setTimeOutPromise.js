// with create our own setTimeout function that will be act as a promise

const setTimeoutPromise = (time) => {
  return new Promise((resolve, reject) => {
    if (typeof time !== "number") {
      reject("Time must be a number");
    }
    setTimeout(resolve, time);
  });
};

setTimeoutPromise("2000")
  .then(() => {
    console.log("Done");
  })
  .catch((err) => console.log("Syntax Error: ", err));
console.log("See this is asynchronous code");
