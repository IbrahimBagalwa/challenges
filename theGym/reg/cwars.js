/**
 *
 * @param {
 * Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.
 * Similar to those kinda names we need to initialize the names.See the pattern below:
 * initials('code wars') => returns C.Wars
 * initials('Barack Hussain obama') => returns B.H.Obama
 * Complete the function initials.
 * Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.
 * }
 * @returns
 */
function intials(n) {
  return n
    .replace(/\b\w/gi, (w) => w.toUpperCase())
    .replace(/\w+\s/gi, (w) => w[0] + ".");
}

console.log(intials("code wars"));