var removeElement = function(nums, val) {
    let numbersRemoved = nums;
    while (numbersRemoved.includes(val)){
        numbersRemoved.splice(nums.indexOf(val),1)
    };
    return numbersRemoved.length
   };


removeElement([3,2,2,3],3)
// removeElement([0,1,2,2,3,0,4,2],2)

// dentistrybyjrw@gmail.com