const draw = (deck) => {
  let newArray = [];
  for (let i = 0; i < deck.length; i++) {
    newArray.push(deck[i]);
    deck.shift();
    deck.push(deck[i]);
  }
  return newArray;
};
console.log(draw(["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"]));
