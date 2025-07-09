var missingNumber = function(nums) {
    let n = nums.length;
    let v = new Array(n+1).fill(-1);
    for(let i = 0; i < nums.length; i++) {
        v[nums[i]] = nums[i];
    }
    for(let i = 0; i < v.length; i++) {
        if(v[i] == -1) return i;
    }
    return 0;
};
