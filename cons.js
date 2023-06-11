function pt() {
  var p = 33;
  if (p) {
    // TDZ
    let foo = foo; // ReferenceError
  }
}
pt();
