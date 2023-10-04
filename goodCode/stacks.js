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
    return this.length;
  }
  pop() {
    if (this.top) {
      const holdingPointer = this.top;
      this.top = this.top.next;

      this.length -= 1;
      return holdingPointer;
    } else return undefined;
  }
  isEmpty() {
    if (this.length === 0) {
      return "The stack is empty";
    }
    return `The stack has ${this.length} elements`;
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
console.log(stack.push("first"));
console.log(stack.push("last"));
console.log(stack.push("removed elements"));
console.log("poped Element: ", stack.pop());
console.log("This is the topest element: ", stack.peek());
console.log(stack.isEmpty());
