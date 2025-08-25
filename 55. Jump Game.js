let memo;
const canJumpFromPosition = (position, nums) => {
    if (memo[position] != "UNKNOWN") {
        return memo[position] == "GOOD";
    }
    let furthestJump = Math.min(position + nums[position], nums.length - 1);
    for (
        let nextPosition = position + 1;
        nextPosition <= furthestJump;
        nextPosition++
    ) {
        if (canJumpFromPosition(nextPosition, nums)) {
            memo[position] = "GOOD";
            return true;
        }
    }
    memo[position] = "BAD";
    return false;
};
var canJump = function (nums) {
    memo = new Array(nums.length).fill("UNKNOWN");
    memo[memo.length - 1] = "GOOD";
    return canJumpFromPosition(0, nums);
};
