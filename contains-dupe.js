var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length
};

containsDuplicate([1,2,3,1])
containsDuplicate([1,2,3,4])