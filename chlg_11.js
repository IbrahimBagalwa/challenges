// charAt
function accederChart(str){
    return str.charAt(3)
}
console.log(accederChart("Bonjour"))
const phrase ="la methode renvoie la nouvelle chaine contenant le caractere a la position indiquee dans l'argument"
const index = 7;
console.log(`le caractere a l'index ${index} est ${phrase.charAt(index)}`);
// la methode concat

const h = "Hello";
const w = "world";
console.log(h.concat(' ' + w))