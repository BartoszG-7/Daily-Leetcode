var findMissingRanges = function (nums, lower, upper) {
    let n = nums.length;
    let missingRanges = [];
    if (n === 0) {
        missingRanges.push([lower, upper]);
        return missingRanges;
    }

    if (lower < nums[0]) {
        missingRanges.push([lower, nums[0] - 1]);
    }

    for (let i = 0; i < n - 1; i++) {
        if (nums[i + 1] - nums[i] <= 1) {
            continue;
        }
        missingRanges.push([nums[i] + 1, nums[i + 1] - 1]);
    }

    if (upper > nums[n - 1]) {
        missingRanges.push([nums[n - 1] + 1, upper]);
    }

    return missingRanges;
};
