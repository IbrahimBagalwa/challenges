function alphaNumeric(str) {
  return /\w/.test(str) && !/[!@#$%^&*_+=]/.test(str) && !/\S/.test(str);
}
console.log(alphaNumeric("hPYtBMzvPw nZitccg2t"));
console.log(alphaNumeric("Mazinkaiser"));
