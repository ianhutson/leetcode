var myPow = function(x, n) {
    if (n < 0){
        x = 1 / x;
        n = -n;
    } 
    return pow (x,n)
    function pow(x,n){
        if (n == 0) {
            return 1.0;
        }
        const half = pow(x, parseInt(n / 2));
        if (n % 2 === 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    }
};

myPow(2.00000, -2147483648)