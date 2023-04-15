// +250-791-042-558
// 250-791-042-558
// (250)791-042-558
// 250.791.042.558
function capturing(n) {
  let reg = /\(?\+?(\d{3})[-.)]\d{3}[-.]\d{3}[-.]\d{3}/;
  return n.replace(reg, "$1-xxx-xxx-xxx");
}
console.log(capturing("(250)791-042-558")); //250-xxx-xxx-xxx

// Bagalwa, Ibrahim
// Swedi, Peter,
// Bagalwa, Elijah
const captureTheFirst = (w) => {
  let regex = /(\w+),\s+(\w+)/;
  return w.replace(regex, "$2,$1");
};
console.log(captureTheFirst("Bagalwa, Ibrahim")); //Ibrahim,Bagalwa
