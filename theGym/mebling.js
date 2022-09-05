function accum(s) {
  let result = [];
  let lower = s.toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    let str = lower[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      str += lower[i];
    }
    result.push(str);
  }
  return result.join('-');
}
console.log(accum('abcde'));
