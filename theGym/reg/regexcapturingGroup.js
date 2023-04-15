// +250-791-042-558
// 250-791-042-558
// (250)791-042-558
// 250.791.042.558
function capturing(n) {
  let reg = /\(?\+?(\d{3})[-.)]\d{3}[-.]\d{3}[-.]\d{3}/;
  return n.replace(reg, "$1-xxx-xxx-xxx");
}
console.log(capturing("(250)791-042-558")); //250-xxx-xxx-xxx
