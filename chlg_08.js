/*
    grading student
*/
function gradingStudents(grade){
    let nextNumber;
        for(let i=grade; i<=100; i++){
            if(i%5==0 && i>grade){
                return nextNumber = i;
            }
        }
        let sum = nextNumber - grade
        if(sum>3){
            return grade
        }else{
            return nextNumber
        }
        
        return nextNumber
}
console.log(gradingStudents(73))