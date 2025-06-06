var preorderTraversal = function (root) {
    if (!root) {
        return [];
    }

    const stack = [root];
    const output = [];

    while (stack.length != 0) {
        root = stack.pop();
        if (root) {
            output.push(root.val);
            if (root.right) {
                stack.push(root.right);
            }
            if (root.left) {
                stack.push(root.left);
            }
        }
    }

    return output;
};
