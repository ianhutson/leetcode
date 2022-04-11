var isPalindrome = function(x) {
    const xArr = String(x).split('');
    const half = Math.floor(xArr.length/2)
    const reverse =  String(x).split('').reverse().slice(0, half);
    let checkArr = [];
        for (let i = 0; half > i;i++){
            checkArr.push(xArr[i]);
        }
        if(checkArr.toString() !== reverse.toString() || (xArr.length == 2 && xArr[0] !== xArr[1]) || xArr.includes('-')){
             return false;
            } 
    return true;
};

isPalindrome(100)