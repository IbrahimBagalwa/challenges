function penaly(password) {
  let matches = password ? password.match(/(\w)(\1{2,}|\1)/g) : 0;

  if (matches && matches[0].length >= 3) {
    return 2;
  } else if (matches[0].length < 3) {
    return 1;
  } else {
    return 0;
  }
}

console.log(penaly("70vSSS859Q"));
console.log(penaly("U2jSS277pQ"));
console.log(penaly(null));
console.log(penaly());
console.log(penaly(""));
