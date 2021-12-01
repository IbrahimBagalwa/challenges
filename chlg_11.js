// charAt
function accederChart(str){
    return str.charAt(3)
}
console.log(accederChart("Bonjour"))//j
const phrase ="la methode renvoie la nouvelle chaine contenant le caractere a la position indiquee dans l'argument"
const index = 7;
console.log(`le caractere a l'index ${index} est ${phrase.charAt(index)}`); // o
// la methode concat

const h = "Hello";
const w = "world";
console.log(h.concat(' ' + w))//hello word

var b = ["Bonjour",' ', "Josh",' ', "!"]
console.log("".concat(...b))//bonjour josh !

// includes() methode il renvoi true or false selon le cas de figure

const word = "nouvelle";
console.log(phrase.includes(word))//true