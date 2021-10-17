/*
    grading student
*/
function gradingStudents(grades) {
    // Write your code here
  
        let SupNextNumber;
        for(let i=grades; i<=100; i++){
                if(i%5==0 && i>grades){
                    return SupNextNumber = i;
                }
        }
        if(grades>38){
            if(SupNextNumber - grades >=3) return grades;
            else return SupNextNumber;
        }else return grades;
}
console.log(gradingStudents([33,73,67]))