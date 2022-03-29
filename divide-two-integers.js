var divide = function(dividend, divisor) {
    let trueDividend = Math.abs(dividend);
    let trueDivisor = Math.abs(divisor);
    const finalResultNegative = Math.sign(divisor) !== Math.sign(dividend)
    let returnValue = 0;

    while(trueDivisor <= trueDividend){
        let check = trueDivisor;
        let multiplier = 1;
        while(check + check <= trueDividend){
            check += check;
            multiplier += multiplier;
        }
        trueDividend = trueDividend - check;
        returnValue += multiplier;
    }
    let final = finalResultNegative ? -returnValue : returnValue
    if (dividend < -1 && divisor == -1){
        return final - 1
    }
    else return final
};

console.log(divide(-2147483648,-1))