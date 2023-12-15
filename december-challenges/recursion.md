## Recursion

Example

```javascript
function randomFunction(value) {
  let result = 0;
  while (value >= 1) {
    result += value;
    value--;
  }
  return result;
}
```

The benefit of this example is that

- Get the job done but it could be cleaner;
- More intuitive for developers who have experience working with iterators( `for/while` loops);

The problem is our code is verbose, describing each and every step to get the solution(imperative)

Recursion is going to be away of doing this in a more declarative way.

### What is recursion ?

(To understand recursion, you must first understand recursion)
A recursion function solves a repetitiive problem by calling itself.

Each function invocation breaks the problem down to solve smaller pieces of the same problems. The goal is to break the input down into smaller possible solution to generate the result. -> the smaller possible solution is called `Base case`

In our example the bese case is the breaking condition (`n >= 1`)

### How do recursive functions work?

Thinking back on iteration, we know we always need three things: `intial value`, `breaking condition`, and `update expression`.

with a recursive function, we also need these key pieces:

- **Base Case**: (simple problem that can be answered directly)
- **Recursive Condition**: (can be described in smaller occurrences of the same problem)
- **Initial Value**: (some input)

```javascript
function recursiveFunction(input) {
  if (baseCase) {
    // Do something easy we know
  } else {
    // recursive case
    recursiveFunction(newIput);
  }
}
```

### Example

```javascript
function recursiveFunction(input) {
  if (input <= 0) return 0;
  return input + recursiveFunction(input - 1);
}
```
