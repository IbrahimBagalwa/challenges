function password(str) {
  //validate password
  return (
    /[a-z]+/.test(str) &&
    /[A-Z]+/.test(str) &&
    /[0-9]+/.test(str) &&
    str.length >= 8
  );
}
console.log(password("Abcd1234"));
