/* trolls are attacking your comment section!
    A common way to deal with this situation is to remove all of the vowels from the trolls
    comments, neutralizing the threat.
    Your task is to write a function that takes a string and return a new string with all vowels removed
*/


function treeVowels(str){
    return str.replace(/[aeiouy | AEIOUY]/g,"");
}
// console.log(treeVowels("la fonction fait le triage de voyelles dans cette phrase"));


/*  What does Math.random() do ??
    it generates a random number between 0 and 1 (not inclusive of 1)
    eg: 0.00000, 0.22223048725, 0.9999999 // not 1.000004324

    What does Math.floor do to positive numbers ??
    it removes the decimals
*/
function rollDice(){
    let randNumber = Math.floor(Math.random() * 6 ) + 1;
    return randNumber;
}
console.log(rollDice());

let hands = ["rock", "paper", "scissor"];
function gethandsRandom (){
    // for(let i = 0; i<hands.length; i++){
        let randomIndex = Math.floor(Math.random() * hands.length);
        console.log(hands[randomIndex]);
    // }
}
gethandsRandom()