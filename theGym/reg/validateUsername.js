/*
    Write a simple regex to validate a username. Allowed characters are:

    lowercase letters,
    numbers,
    underscore
    Length should be between 4 and 16 characters (both included).
*/
function validateUsername(res) {
  return /^[a-z0-9_]{4,16}$/.test(res);
}
console.log(validateUsername("asd43_34"));
console.log(validateUsername("asd43 34"));
