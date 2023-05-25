// +250-791-042-558
// 250-791-042-558
// (250)791-042-558
// 250.791.042.558
function capturing(n) {
  let reg = /\(?\+?(\d{3})[-.)]\d{3}[-.]\d{3}[-.]\d{3}/;
  return n.replace(reg, "$1-xxx-xxx-xxx");
}
console.log(capturing("(250)791-042-558")); //250-xxx-xxx-xxx

let arr = [1, 1, 2, 3, 4, 5, 6, 7, 8, 89, 98, 42, 1, 3, 5, 6, 4];
console.log(arr[arr.length - 4]);
// Bagalwa, Ibrahim
// Swedi, Peter,
// Bagalwa, Elijah
const captureTheFirst = (w) => {
  let regex = /(\w+),\s+(\w+)/;
  return w.replace(regex, "$2,$1");
};
console.log(captureTheFirst("Bagalwa, Ibrahim")); //Ibrahim,Bagalwa
