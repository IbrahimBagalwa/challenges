function makeNegative(num) {
  // Code?
  //   return num > 0 ? -num : num; //this is my solution
  return -Math.abs(num); // this is the short cut solution
}
console.log(makeNegative(-1));
