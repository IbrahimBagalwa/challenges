function test() {
  var p = 33;
  if (p) {
    let foo;
    foo + 55; // ReferenceError
  }
}
test();
