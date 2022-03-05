let firstCard =5;
let secondCard = 2;
let cards = [firstCard, secondCard];
let message = ""
let isAlive = true;
let hasBlackJack = false;
let sum = cards[0] + cards[1];



let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

function renderGame(){
  sumEl.textContent = `Sum : ${sum}`;
  cardsEl.textContent = "Cards: " + cards[0] +" + " + cards[1]
  if(sum <= 20){
      message = "Do you want to draw a new card? ";
  }else if(sum === 21){
    message ="Wohoo! You've got blackJack! ";
      hasBlackJack = true;
  }else{
    message = "You're out of the game";
      isAlive= false;
  }
  messageEl.textContent = message
}
function startGame(){
  renderGame()
}


function newCard(){
  let cardOne = 7;
  sum +=cardOne;
  cards.push(cardOne)
  renderGame()
}
