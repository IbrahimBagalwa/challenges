const getFirstElement = (array: (string | number)[]) =>{
    return array[0]
}

const  arry = ["a", "b", "c", "d", "e"]
const firstString = getFirstElement(arry)
console.log(firstString)

const numbers = [1,2,3,4,4,4]
const firstNumber = getFirstElement(numbers)

console.log(firstNumber)