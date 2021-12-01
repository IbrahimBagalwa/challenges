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

// console.log(p,m)//a b

const students = [
  { name: "Nick", grade: 10 },
  { name: "John", grade: 15 },
  { name: "Julia", grade: 19 },
  { name: "Nathalie", grade: 9 },
]
const mapPlus = students.map(top => top.grade);

const filterPlus = mapPlus.filter(ite=> ite >10);

const reducePlus = filterPlus.reduce((prev, next)=> prev + next,0);

// console.log(filterPlus,reducePlus)
const numbers = [1,2,3,4,5,6,7,8,9];


const pair = numbers.filter(function(n){
    return n % 2 === 0
});
// console.log(pair)

const double =(n)=> n*2;

const doublesArry = numbers.map(double);
// console.log(doublesArry)

function grade(fsname,lsname, ...grades){
    const grd = grades.reduce((prev, next)=>prev + next, 0)/grades.length
    return{
        name: fsname,
        lsname: lsname,
        grades: grades,
        grd:grd
    }
}
console.log(grade("Nick", "John",10, 12, 15, 60))