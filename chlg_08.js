/*
    grading student
*/
function mult(m){
    for(let i=m; i<=100; i++){
        if(i%5===0 && i>m){
           return i 
        }
    }
}

function gradingStudents(grades) {
    let multiple =[]
    
    for(let j =0; j<grades.length; j++){
   
        let d = 5 - (grades[j]%5);
        if(grades[j] >= 38){
            if(d<3){
                multiple.push(grades[j]+d)
            }
            else{
                multiple.push(grades[j]);
            }
        }else{
            multiple.push(grades[j]);
        }
       
    
  
    }
    
    return multiple
}
console.log(gradingStudents([73,80,33]))