// var containsDuplicate = function(nums) {
//     nums.sort((a,b) => a-b);
//     for(let i = 0; i < nums.length; i++){
//         if (nums[i] == nums[i+1]){
//             return true
//         }
//     }
//     return false
// };

var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length
};

containsDuplicate([1,2,3,1])
containsDuplicate([1,2,3,4])