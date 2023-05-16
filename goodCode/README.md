## What is good code ?

Good code can be describe in two things:

1. Readability: clean and other can undestand it;
2. Scalable: BigO it allows us to measure this idea of scalable code

## Rules of BigO

- worst case: we have to find a worst case in our function.
  example:

```javascript
const arr = ["Hello", "bag", "bag2", "bag3", "Meno"];
function findMeno(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("Running");
    if (array[i] === "Meno") {
      console.log("We find our Meno: " + array[i]);
    }
  }
}
findMemo(arr);
// Here our function will run five times, but how about if the Meno was at the end ["Meno", "bag", "bag2", "bag3"] here it will run five times if we does not have break our function when we found directly Meno. ...if(array[1] == "Meno"){console.log(array[i]) break;}
```
