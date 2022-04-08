var firstMissingPositive = function(nums) {
    nums = nums.filter(function(x){ return x > -1 }).sort(function(a,b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    if (nums[0] > 1 || nums.length == 0){
        return 1
    }
    for(let i=0; nums.length>i;i++){
        let j = i+1
        if (j >= nums.length || nums[j] - nums[i] > 1){
           return nums[i]+1
        } 
    }
};

firstMissingPositive([1,2,3,4,5,6,7,8,9,20])