function maskify(str) {
  let ar = str.split("");
  for (let i = 0; i < ar.length - 4; i++) {
    ar[i] = "#";
  }
  return ar.join("");
}
console.log(maskify("4556364607935616"));
