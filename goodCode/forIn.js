const person = {
  name: "Ibrahim",
  age: 25,
  status: "trainee",
};

for (let properyName in person) {
  console.log(`${properyName} : ${person[properyName]}`);
}
