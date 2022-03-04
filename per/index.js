let count = 0 ;
let countEl = document.getElementById("count-el");
function incrementEl(){
    count += 1;
    countEl.textContent = count;
}
let saveEl = document.getElementById("save-el")
function save(){
    let prev = count + " - "
   saveEl.textContent += prev
   countEl.textContent = 0
}

let num1 = 8;
let num = 2;
document.getElementById("num-el").textContent = num1;
document.getElementById("num2-el").textContent = num;
let sum = document.getElementById("sum-el");
function add(){
    let tot = num1 + num;
    sum.textContent = "Sum: " + tot;
}
function sub(){
    let tot = num1 - num;
    sum.textContent = "Sum: " + tot;
}
function mul(){
    let tot = num1 * num;
    sum.textContent = "Sum: " + tot;
}
function div(){
    let tot = num1 / num;
    sum.textContent = "Sum: " + tot;
}


let message = "Welcome Back ";
let names = "Ibrahim Bagalwa";
let greet = message + names;
document.getElementById("welcom").innerText = greet;