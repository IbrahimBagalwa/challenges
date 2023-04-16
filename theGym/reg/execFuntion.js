function executeResult(str) {
  let regex = /(\d{3})[-.]\d{3}[-.]\d{3}/;
  let result = regex.exec(str);
  while (result !== null) {
    result = regex.exec(result);
  }
  return result;
}
console.log(executeResult("250-971-004"));
