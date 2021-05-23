/*
    if we list the naturel numbers below 10 that are multiples of 3 and 5, we get 3,5,6 and 9 the sum of the sum of this multiple is 23.
    finish the solution so that it returns the sum of all a multiples 3 or 5 below the number passed in.
    notice: if the number if multiples of both 3 and 5, only count it once, also if the number is negative return 0
*/
function solution(number){
    let nbr = [];
    for(let i = 1; i < number; i++){
        if(i%3===0 || i%5===0){
            nbr.push(i);
        }
    }
    return 'la somme de ' + nbr + ' est de: '+ nbr.reduce((x,y)=>
        x + y
    ,0)
}
console.log(solution(30));
 
function impair(nub){
    let nbr = [];
    for(let i = 0; i< nub; i++){
        if(i%(2)!==0){
            nbr.push(i);
        }
    }
    return nbr;
 }
//  console.log(impair(5))

function stringLetter(str){
    const mot = str.charAt(0)
    return mot
}
// console.log(stringLetter("jtm"));