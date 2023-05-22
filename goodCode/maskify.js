function maskify(str) {
  let ar = str.split("");
  for (let i = 0; i < ar.length - 4; i++) {
    ar[i] = "#";
  }
  return ar.join("");
}
// console.log(maskify("4556364607935616"));

function reverse(str) {
  //   let arrString = str.split("");
  //   let strings = [];
  //   for (let i = arrString.length; i >= 0; i--) {
  //     strings.push(arrString[i]);
  //   }
  return [...str].reverse().join("");
}
console.log(reverse("Hi my name is Ibrahim"));
