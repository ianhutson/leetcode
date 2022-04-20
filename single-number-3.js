var singleNumber = function(nums) {
    const map = Object.assign({},...nums.map(key => ({[key]: 0})));
    let numSet = new Set(nums)
    let arr = Array.from(numSet)
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < nums.length; j++){
            if(arr[i] == nums[j]){
                map[arr[i]]++
            } 
        }
    }
    let output = Object.keys(map).filter(k=>map[k]===1)
    return output
};

singleNumber([1,2,1,3,2,5])