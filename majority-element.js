var majorityElement = function(nums) {
    nums.sort()
    let output = 0;
    let currentMajorityCount = 0;
    let elementCount = 0;
    if(nums.length == 1) return nums[0]
    for (let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i+1]){
            elementCount += 1
            if(elementCount > currentMajorityCount){
                currentMajorityCount = elementCount
                output = nums[i]
            } 
        } else elementCount = 0;
    }
    return output
};

majorityElement([10,9,9,9,10])