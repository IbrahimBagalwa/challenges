function intialLetter(str){
    let names = str.split(' ')
    return names[0].substring(0,1) + names[1].substring(1,0);
    // return names[0][0] + ''+ names[1][0] meme resultat avec le premier

}
console.log(intialLetter("Ibrahim Bagalwa"));


// meme solution
function decouper(str){
    let name = str.split(' ')
    return name[0].charAt(0).toUpperCase() + '' + name[1].charAt(0).toUpperCase()
}
console.log(decouper("peter swedi"));