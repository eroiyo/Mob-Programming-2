function getMoneySpent(keyboards, drives, b) {
    function compareNumbers(a, b) {
  return a - b;
}
    let totalprices =[];
    for(let i=0; i<keyboards.length; i +=1){
        for(let e=0; e<drives.length; e +=1){
            totalprices.push(keyboards[i]+drives[e]);
        }
    }
    totalprices.sort(compareNumbers)
    let result = -1;
    for(let i=0; i<totalprices.length; i+=1){
        if(totalprices[i]<=b){
            result=totalprices[i];
        } else{
            return result;
        }
    }
}

