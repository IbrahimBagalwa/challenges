const student = "student";

// console.log(Array.from(student));
const text = document.querySelectorAll(".text");
const newTextArray = Array.from(text);
console.log(newTextArray);
const value = newTextArray.find((item) => item.textContent === "TheGym Rwanda");
console.log(value);
