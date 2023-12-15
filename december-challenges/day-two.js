function sumNaturals(n) {
  let result = 0;
  while (n >= 1) {
    result += n;
    n--;
  }
  return result;
}

function recursiveFunction(input) {
  if (input <= 0) return 0;
  return input + recursiveFunction(input - 1);
}
console.log(recursiveFunction(5));
