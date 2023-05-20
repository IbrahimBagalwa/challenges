let value = 942;

function digitalRoot(n) {
  return n.toString().length == 1
    ? n
    : digitalRoot(
        n
          .toString()
          .split("")
          .reduce((a, c) => Number(a) + Number(c), 0)
      );
}
console.log(digitalRoot(value));
