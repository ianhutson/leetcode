var isConsecutive = function(nums) {
    nums = nums.sort((a,b)=>a-b)
    for(let i = nums.length - 1; i > 0; i--){
        if(nums[i] - nums[i-1] !== 1){
            return false
        }
    } return true
};
isConsecutive([10,9,15,16,11,12,13,14,18,17])