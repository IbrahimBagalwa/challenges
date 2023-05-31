// how to create an object in javascript?

// there is many ways to create an object in javascript here are some examples:

const obj = new Object(); //using the constructor object. this method is not recommended.
// console.log(obj); // {}
// console.log((obj["name"] = "Ibrahim"));
// console.log(obj);

// The second way is to use create method
const objeCreate = Object.create({}); // we are passing the prototype object as a parameter
// console.log(objeCreate);

// object literal syntax
const literalObject = {
  name: "Ibrahim",
};

// function constructor
function ObjectFunctionConstructor(name) {
  this.name = name;
  this.age = 212;
}
const objFunc = new ObjectFunctionConstructor("Ibrahim");
console.log(objFunc.name, objFunc.age);

// function constructor with prototype
function Person() {}
Person.prototype.name = "Nothing is happening";
const objt = new Person();
console.log(objt.name);

// we create an object using class
class ObjClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const objName = new ObjClass("Ibrahim", 2020);
console.log(objName);

// we can create an object with the sigleton pattern

const objSingle = new (function (name) {
  this.name = name;
})();
console.log((objSingle.name = "Ibrahim"));
console.log(objSingle);
