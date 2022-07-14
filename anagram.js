function anagram(str) {
  const str1 = new Set(str.split(/\s+/));
  let arr = [...str1];
  let ob = {};
  let ana = 0;
  arr.map((w) => {
    let key = w.split('').sort().join('');
    if (key in ob) {
      ana += 1;
    } else {
      ob[key] = true;
    }
  });
  return ana === 0 ? false : true;
}

console.log(anagram('cars arcs'));
