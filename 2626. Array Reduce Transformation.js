var reduce = function(nums, fn, init) {
    let val = init;
    for (i = 0; i < nums.length; i++) {
        val = fn(val, nums[i])
    }
    if (nums.length === 0) {
        return init;
    }
    else {
        return val;
    }
};