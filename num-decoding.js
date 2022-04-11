var removeDuplicates = function(nums) {
    nums.forEach((element, index) => {
    nums.splice(index, nums.lastIndexOf(element) - index)
    });
};
