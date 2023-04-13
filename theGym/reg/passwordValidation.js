function password(str) {
  //validate password
  if (
    /[a-z]+/.test(str) &&
    /[A-Z]+/.test(str) &&
    /[0-9]+/.test(str) &&
    str.length >= 8
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(password("Abcd1234"));
