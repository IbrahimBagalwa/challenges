var contacts =[
    {
        'fsname':"Ibrahim",
        'lsname':"Bagalwa",
        "number":"0791042558",
        "likes": ["Javascript", "Gaming", "foxes"]
    },
        {
        'fsname':"Peter",
        'lsname':"Swedi",
        "number":"0987654321",
        "likes": ["HTML", "CSS", "Botstrap"]
    },
        {
        'fsname':"Josh",
        'lsname':"Kim",
        "number":"008980632",
        "likes": ["Python", "JS", "c"]
    },
        {
        'fsname':"Grac",
        'lsname':"Bir",
        "number":"0798361832",
        "likes": ["Javascript", "python", "java"]
    }
]

function lookUpProfile(name, prop){
    for(let i = 0; i<contacts.length; i++){
        if(contacts[i].fsname === name){
            return contacts[i][prop] || "No such Property";
        }
    }
    return "No such contact";
}
var data = lookUpProfile("Grac", "fsname");
// console.log(data);

function ourRandomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(ourRandomRange(1,9));
function convertToInteger(str){
    return parseInt(str, 2);
}
// console.log(convertToInteger("10011"));
function fits(x,y){
    if(Number.isInteger(x/y)){
        return `${x/y} there are the number`
    }
    return `${x/y}does not fit`;
}
// console.log(fits(1,0))
function freezeObj(){
    "use strict"
    const MATH_CONSTANTS = {
        PI:3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (error) {
        console.log(error);        
    }
    return MATH_CONSTANTS;
}
// console.log(freezeObj());

const realNumberArray = [4,5.6, 3.14, 42, 6, 8.34];

const squareList = (arr)=>{
    const squareIntegers = arr.filter(num=> Number.isInteger(num) && num>0);
    return squareIntegers;
}
console.log(squareList(realNumberArray));
const [x,y] = [1,2,3,4,5,6];
console.log(x,y);