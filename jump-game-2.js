var jump = function(nums) {
    var max = nums[0], len = nums.length, beginIndex = 0, endIndex, count = 1;
    if (len < 2) {
        return 0;
    }
    endIndex = nums[0];
    while (max < len - 1) {
        var n = beginIndex, m = endIndex;
        beginIndex = endIndex + 1;
        for (var i = n; i <= m; i++) {
            if (i + nums[i] > max) {
                max = i + nums[i];
                endIndex = max;
            }
        }
        count++;
    }
    return count;
};