var singleNumber = function(nums) {
    nums = nums.sort()
    for(let i = 0; nums.length >= i; i = i+2){
        if (nums[i] !== nums[i+1]){
            console.log(nums[i])
            
        } 
    }
};

singleNumber([2,1,2])