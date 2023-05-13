const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];
const checkSequence = (password) => {
  let itSequenseIncluded = password?.match(/\d{2,}/g);
  let ar = itSequenseIncluded[0].split("").map((it) => Number(it));
  for (let i = 0; i < ar.length; i++) {
    const intialNumber = ar[i];
    const nextNumber = ar[i + 1];
    if (nextNumber && nextNumber - intialNumber === 1) return true;
    if (nextNumber && intialNumber - nextNumber === 1) return true;
  }
  return false;
};
function password(password) {
  let forbidden = forbiddenPasswords.includes(password) ? false : true;
  return (
    password.length >= 10 &&
    /[A-Z]+/.test(password) &&
    /[a-z]+/.test(password) &&
    /[0-9]+/.test(password) &&
    /^[^#\/@]+$/.test(password) &&
    forbidden &&
    (checkSequence(password) ? false : true)
  );
}
console.log(password("aaBBcc1111"));
