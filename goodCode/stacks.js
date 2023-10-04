class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.top && this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (this.top) {
      const holdingPointer = this.top;
      this.top = this.top.next;

      this.length -= 1;
      return holdingPointer;
    }
    if (this.bottom === this.top) {
      this.bottom = null;
    }
    return undefined;
  }
  isEmpty() {
    if (this.length === 0) {
      return "The stack is empty";
    }
    return `The stack has ${this.length} elements`;
  }
}

// const stack = new Stack();
// console.log(stack.isEmpty());
// console.log(stack.push("first"));
// console.log(stack.push("last"));
// console.log(stack.push("removed elements"));
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.isEmpty());

class StackArray {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    const poped = this.array.pop();
    return poped;
  }
  isEmpty() {
    if (this.array.length) {
      return this.array;
    }
    return this.array.length;
  }
}

const stackArray = new StackArray();
console.log(stackArray.isEmpty());
console.log(stackArray.peek());
console.log(stackArray.push("first"));
console.log(stackArray.push("last"));
// console.log(stackArray.push("removed elements"));
// console.log("poped", stackArray.pop());
// console.log("poped", stackArray.pop());
// console.log("value in array", stackArray.isEmpty());
