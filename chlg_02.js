function longWorld(str){
    var mots = str.split(' ');
    let long = 0;
    for(let i = 0; i < mots.length; i++){
        if(mots[i].length >long){
            long = mots[i].length
        }
    }
    return long 
}
console.log(longWorld("bonjour les amos nous sommes en javascript"));

function longworld(str){
    return str.split(' ').reduce((x,y)=>{
        return Math.max(x,y.length) 
    },0)
}
console.log(longworld("une autre maniere"));