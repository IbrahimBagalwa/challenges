const plainFunction = async () => {
  console.log("start");
  return "Done";
};
plainFunction().then((result) => console.log(result));
console.log("Let have a look to the async function");
