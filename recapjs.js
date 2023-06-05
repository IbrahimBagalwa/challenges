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

// what is the prototype chain?
// prototype chain: prototype chain is moste of the time used to build an new types of object based on the existing one. in class base programming is similar to inheritance.

// what is JSON and its on common operations
// is just a text based data format following by javascript object syntax.
//  JSON.parse()// to convert the string to native object
// JSON.stringify() // convert the native object to a string.

// purpose of array slice in javascript:
// array slice returns the selectd items as a new array object without modifying the original array

const arraySlice = [1, 2, 3, 4, 5, 6, 7, 8];
const returnArray = arraySlice.slice(2, 4);
console.log(arraySlice, returnArray);

// purpose of array splice: array splice is used either  adding/removing  from -to aspecific indication
// the array splice return the removed items

// What is the difference between == and === operators
// the strict equality operator check if the value and the type of the variable are the same while no-strict equality operator check just the value.

// what is lambda function or arrow function?
// arrow function is a short hand of function expression and it does not have this, argments and super and they cannot be  used as constructor

// what is the first class function in js
// functions are first class object function because they can be treat like a variable.

// what is the first order function?
// it's a function that doesn't accept other function as argument and it cannot return a function as its value

// what is the hoc functions?
// hoc functions are just functions that can accept other function as argument and return a function as its value
const funcFoc = () => console.log("i'm just a first order function");
const hoc = (firstOFC) => firstOFC();
hoc(funcFoc);

// what is a unary function?
// unary function is a function that accept exactly one argument.
const unary = (a) => a + 10;
unary(10);

// what is a currying function?
// currying is a process of taking a function that accepts multiple arguments and turn it into a sequence of functions with single argument.

const multipleArgument = (a, b, c) => a + b + c;
multipleArgument(10, 2, 3); // 15

// turn it into a sequence of functions with single argument.(currying)
const curryingFunc = (a) => (b) => (c) => a + b + c;
curryingFunc(10); // 10+b+c
curryingFunc(10)(2); // 10 +2+c
curryingFunc(10)(2)(3); // 10+2+3

// what is a pure function?
// pure function is a function where its arguments will determine the return value without any side effects.
const pureFunc = (a, b) => a + b; // no matter how many time this function get caalled its return value will be determined by the arguments.
function func1() {
  return {
    value: "session",
  };
}
func1(); //obj
function func2() {
  return;
  {
    value: "session";
  }
}
func2();

// what is IIFE?
// It is a function that run as soon as it is defined, the purpose of the IIFE is to obtain data previcy and the variable declare into IIFE cannot be accessed outside.
(function () {
  var message = "IIFE";
  console.log(message);
})();
// console.log(message); //ReferenceError: message is not defined
let uri =
  "https://github.com/sudheerj/javascript-interview-questions#what-are-the-possible-ways-to-create-objects-in-javascript";
const urlEncod = encodeURIComponent(uri);
console.log(urlEncod);
const urlDecod = decodeURI(uri);

let newArray = [];
const pureFunction = (number) => (arrayNumber) => arrayNumber.concat(number);
const impureFunction = (number) => newArray.push(number);

// what is memoization : is a technic in programming language which attempts to increase function's peformance by caching its previously computed result.
