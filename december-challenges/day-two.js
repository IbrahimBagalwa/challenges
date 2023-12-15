function sumNaturals(n) {
  let result = 0;
  while (n >= 1) {
    result += n;
    n--;
  }
  return result;
}
console.log(sumNaturals(5));
