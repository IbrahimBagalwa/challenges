function GracklePop(number){
   if(number >=1 && number<=100){
        if(number%3===0 && number%5===0){
            console.log(`CraklePop`)
        }else if(number%3===0){
            console.log(`Crackle ${number}`)
            
        }else if(number%5===0){
            console.log(`Pop`)
        }else{
            console.log(`number is not divisible by 5 or 3`)
        }
    }else{
        console.log('number is undefined')
    }
}
console.log(GracklePop(4))