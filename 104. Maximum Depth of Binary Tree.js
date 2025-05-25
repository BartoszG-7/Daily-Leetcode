var maxDepth = function (root) {
    if (root === null) {
        return 0;
    }
    const left_height = maxDepth(root.left);
    const right_height = maxDepth(root.right);
    return 1 + Math.max(left_height, right_height);
};
