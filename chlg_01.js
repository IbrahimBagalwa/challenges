function intialLetter(str){
    let names = str.split(' ')
    return names[0].substring(0,1) + names[1].substring(1,0);
}
console.log(intialLetter("Ibrahim Bagalwa"));