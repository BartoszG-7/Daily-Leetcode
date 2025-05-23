var inorderTraversal = function(root) {
    let res = [];
    helper(root, res);
    return res;
};
var helper = function (root, res) {
    if (root !== null) {
        helper(root.left, res);
        res.push(root.val);
        helper(root.right, res);
    }
};
