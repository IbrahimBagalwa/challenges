class ArrayDataStructure {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  shift() {
    const firstItem = this.data[this.length - this.length];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }
  unshift(item) {
    if (this.length == 0) {
      this.data[this.length] = item;
      this.length++;
    }
    // for (let key in this.data) {
    //   //   this.data["0"] = item;
    //   console.log("This dot data:", key);
    // }
    return this.length;
  }
}

const myArray = new ArrayDataStructure();
// console.log(myArray.push("Olivier"));
// console.log(myArray.push("Peter"));
// console.log(myArray.push("Orn"));
console.log(myArray.unshift("kakakak"));
// console.log(myArray.pop());
// console.log(myArray.shift());
console.log(myArray);
