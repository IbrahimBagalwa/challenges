let cards =[];
let message = ""
let isAlive = true;
let hasBlackJack = false;
let sum = 0;


let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
  name: "Ibrahim",
  chips: 140
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard(){
  let randNumber = Math.floor(Math.random() * 13) + 1;
  if(randNumber > 10){
    return 10
  }else if(randNumber === 1){
    return 11
  }else
  return randNumber;
}

function renderGame(){
  sumEl.textContent = `Sum : ${sum}`;
  cardsEl.textContent = "Cards: "
  for(let i=0; i<cards.length; i++){
    cardsEl.textContent += cards[i] + " "
  }
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
  let firstCard =getRandomCard();
let secondCard = getRandomCard();
cards = [firstCard, secondCard];
sum = firstCard + secondCard;
  renderGame()
}


function newCard(){
  if(isAlive===true && hasBlackJack === false){
    let cardOne = getRandomCard();
    sum +=cardOne;
    cards.push(cardOne)
    renderGame()
  }
}

let greetingEl = document.querySelector(".greet-el");
greetingEl.textContent ="Hello 🖐️ my name is " + player.name
