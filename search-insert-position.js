// // easy way

// var searchInsert = function(nums, target) {
//     if(nums.includes(target)) return nums.indexOf(target)
//     else if(nums[nums.length-1] < target) return nums.length
//     else if (nums[0] > target) return 0
//         for(let i=0; nums.length > i; i++){
//             if(nums[i] < target && nums[i+1] > target){
//                 return i+1
//             }
//         }         
// }

// faster way
var searchInsert = function(nums, target) {
    if(nums.includes(target)) return nums.indexOf(target)
    else if(nums[nums.length-1] < target) return nums.length
    else if (nums[0] > target) return 0
    else {
        const closest = nums.reduce((a, b) => {
            return Math.abs(b - target) < Math.abs(a - target) ? b : a;
        });
        if(closest > target){
            return nums.indexOf(closest)
        } else return nums.indexOf(closest) + 1
    }
}


searchInsert([1,3,5,6], 7)