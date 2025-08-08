var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length && nums[i] <= 0; ++i)
        if (i === 0 || nums[i - 1] !== nums[i]) {
            twoSumII(nums, i, res);
        }
    return res;
};

let twoSumII = function (nums, i, res) {
    let lo = i + 1,
        hi = nums.length - 1;
    while (lo < hi) {
        let sum = nums[i] + nums[lo] + nums[hi];
        if (sum < 0) {
            ++lo;
        } else if (sum > 0) {
            --hi;
        } else {
            res.push([nums[i], nums[lo++], nums[hi--]]);
            while (lo < hi && nums[lo] == nums[lo - 1]) ++lo;
        }
    }
};
