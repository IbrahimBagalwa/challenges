const person = {
    name:"David",
    lsname: "maene"
}
function destructuration({name, lsname}){
    return name + '-' + lsname;
}

// console.log(destructuration(person))

// sans destructuration

function sansDestructuration(dest){
    const fsname = dest.name;
    const lssname = dest.lsname;
    return fsname + '-' + lssname
}
// console.log(sansDestructuration(person))// David-Maene

const myArray = ["a", "b","c"];

const [x,y] = myArray;
// console.log(x,y);//a b

// sans destructuration
const p = myArray[0];
const m = myArray[1];

console.log(p,m)//a b