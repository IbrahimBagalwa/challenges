let arr = ["a", "b", "c"];
let i = 0;
while (arr.length > i) {
  console.log(arr[i]);
  console.log(i);
  if (arr[i] === "b") break;
  i++;
}
