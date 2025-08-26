var combinationSum = function (candidates, target) {
    function backtrack(remain, start, path) {
        if (remain < 0) {
            return;
        }
        if (remain === 0) {
            combinations.push([...path]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(remain - candidates[i], i, path);
            path.pop();
        }
    }
    const combinations = [];
    backtrack(target, 0, []);
    return combinations;
};
