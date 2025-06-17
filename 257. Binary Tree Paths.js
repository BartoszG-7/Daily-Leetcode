var binaryTreePaths = function(root) {
    const res = [];
    if (!root) return res;

    const stack = [[root, `${root.val}`]];

    while (stack.length > 0) {
        const [node, path] = stack.pop();

        if (!node.left && !node.right) {
            res.push(path);
        }

        if (node.right) {
            stack.push([node.right, `${path}->${node.right.val}`]);
        }

        if (node.left) {
            stack.push([node.left, `${path}->${node.left.val}`]);
        }
    }

    return res;
};
