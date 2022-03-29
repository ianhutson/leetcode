var addTwoNumbers = function(l1, l2) {
    let reverse1 = [];
    for(let i = l1.length-1; i >= 0; i--) {
        reverse1.push(l1[i]);
        
    }
    let num1 = parseInt(reverse1.join(''))
    let reverse2 = [];
    for(let i = l2.length-1; i >= 0; i--) {
        reverse2.push(l2[i]);
    }
    let num2 = parseInt(reverse2.join(''))
    let Total = num1 + num2;
    console.log(JSON.stringify("total: "+ Total))
    let answer = Array.from(String(Total), Number);
    let answer2 = [...answer]
    if (answer = 0)
        return null
    else {
        return answer2
    }
    
};

addTwoNumbers([2,4,3],[5,6,4])