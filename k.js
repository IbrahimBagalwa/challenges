function Interview(name) {
  this.name = name;
}

Interview.prototype.getResult = function (point) {
  return this.name + " you get a result of " + point;
};
Interview.prototype.age = 20;
const newInterview = new Interview("Ibrahim");
console.log(newInterview.name);

const person = new Interview("hhhhh");
