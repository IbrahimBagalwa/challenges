function getCount(str) {
    var vowelsCount;
    
    // enter your majic here
    for(let i=0; i<=str.length; i++){
       vowelsCount = str.replace(/[bcdfghjklmnpqrstvwxz| BCDFGHJKLMNPQRSTVWXZ]/g,"")
    }
    
    return vowelsCount;
  }
  console.log(getCount("bonjour papa"))