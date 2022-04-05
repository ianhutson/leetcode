var findMedianSortedArrays = function(nums1, nums2) {
    const sortNumber = function(a,b){
        return a-b
    }

    let combinedArr = nums1.concat(nums2);
    combinedArr.sort(sortNumber);
    console.log(combinedArr)
    if(combinedArr.length % 2 == 0){
        let half = Math.round(combinedArr.length / 2) - 1
        console.log('even')
        let ans = (combinedArr[half] + combinedArr[half + 1])/2
        console.log(ans)
        return ans
    } else {
        let half = Math.round(combinedArr.length / 2) 
        console.log(half)
        console.log(combinedArr[half-1])
        return combinedArr[half]
    }
};

findMedianSortedArrays([1,3], [2])