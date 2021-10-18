/*
    grading student
*/
function gradingStudents(grades) {
    let next=[];
    for(let i = 1; i>grades; i++){
        if(i%5==0){
            next.push(i)
        }
    }
    // for(let j=0; j<grades.length;j++){
    //    if(grades[j]<38){
    //         console.log(grades) ;
    //    }
    //    else if (next - grades[i]){

    //    }
    // }

    return next;
}
console.log(gradingStudents([73,67,33]))