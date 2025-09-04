var allPossibleBST = function (start, end, memo) {
    let res = [];
    if (start > end) {
        res.push(null);
        return res;
    }
    let key = start + "," + end;
    if (memo[key] != undefined) {
        return memo[key];
    }
    for (let i = start; i <= end; ++i) {
        let leftSubTrees = allPossibleBST(start, i - 1, memo);
        let rightSubTrees = allPossibleBST(i + 1, end, memo);
        for (let j = 0; j < leftSubTrees.length; j++) {
            for (let k = 0; k < rightSubTrees.length; k++) {
                let root = new TreeNode(i, leftSubTrees[j], rightSubTrees[k]);
                res.push(root);
            }
        }
    }
    memo[key] = res;
    return res;
};
var generateTrees = function (n) {
    let memo = {};
    return allPossibleBST(1, n, memo);
};
