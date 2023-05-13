function doubleWorld(str) {
  const arr = str.split("");
  let string = [];
  for (let i = 0; i < arr.length; i++) {
    string.push(arr[i] + arr[i]);
  }
  return string.join("");
}
console.log(doubleWorld("1234!"));
