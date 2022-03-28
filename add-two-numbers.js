var addTwoNumbers = function(l1, l2) {
    let reverse1 = [];
    for(let i = l1.length-1; i >= 0; i--) {
        reverse1.push(l1[i]);
        console.log(JSON.stringify(l1[i]))
    }
    let reduce1 = 0;
    for (let i in reverse1){
        reduce1 += l1[i]
    }
    
    let reverse2 = [];
    for(let i = l2.length-1; i >= 0; i--) {
        reverse2.push(l2[i]);
    }
    let reduce2 = 0;
    for (let i in reverse2){
        reduce2 += l2[i]
    }
    let Total = reduce1 + reduce2;
   
    let answer = Total.toString().split().reverse();
    if (answer = 0)
        return null
    else return answer
};

addTwoNumbers([2,4,3],[5,6,4])