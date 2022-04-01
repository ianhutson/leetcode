 var maxProfit = function(prices) {
    let lowest = Infinity;
    let max = 0
    for(let i = 0; prices.length > i; i++){
        if(prices[i] < lowest){
           lowest = prices[i]
        }
        max = Math.max(0, price[i] - lowest)
    }
    return max
};

maxProfit([7,1,5,3,6,4])