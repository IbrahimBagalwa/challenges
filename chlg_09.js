function sockMerchant(n,ar) {
    let a={};

    // for(let i=0; i<n; i++){
    //       if(p[i] === p[i+1]){
    //         pa += Math.floor(pa/2)
    //       }
    // }
    // return pa


    var obj = {};

    ar.forEach(item => {
      obj[item] = obj[item] ? obj[item] + 1 : 1;
    });
    
    return Object.values(obj).reduce((acc, curr) => {
      acc += Math.floor(curr / 2)
      return acc;
    }, 0);
}
console.log(sockMerchant(10,[1,1,3,1,2,1,3,3,3,3]))
// 4
console.log(sockMerchant(9,[10 ,20, 20, 10, 10, 30, 50, 10, 20]))
// 3