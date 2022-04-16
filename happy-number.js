var isHappy = function(n) {
    let arr = [], square = sumOfSquares(n);
    while (!arr.includes(square)) {
        if (square === 1) return true;
        arr.push(square);
        square = sumOfSquares(square);
    }
    return false;
};


var sumOfSquares = function(num) {
    let sum = 0;
    num = num.toString();
    for (let x of num) {
        x = Number(x);
        sum += x*x;
    }
    return sum;
}

isHappy(7)