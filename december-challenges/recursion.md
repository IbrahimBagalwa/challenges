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
