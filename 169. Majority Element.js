var majorityElement = function (nums) {
    const majorityCount = Math.floor(nums.length / 2);

    for (let num of nums) {
        let count = 0;
        for (let elem of nums) {
            if (elem === num) {
                count += 1;
            }
        }
        if (count > majorityCount) {
            return num;
        }
    }
    return -1;
};
