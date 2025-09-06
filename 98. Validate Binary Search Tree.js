var isValidBST = function (root) {
    const stack = [],
        lowerLimits = [],
        upperLimits = [];
    function update(node, low, high) {
        stack.push(node);
        lowerLimits.push(low);
        upperLimits.push(high);
    }
    update(root, null, null);
    while (stack.length) {
        node = stack.pop();
        let low = lowerLimits.pop();
        let high = upperLimits.pop();
        if (node === null) continue;
        let val = node.val;
        if (low !== null && val <= low) {
            return false;
        }
        if (high !== null && val >= high) {
            return false;
        }
        update(node.right, val, high);
        update(node.left, low, val);
    }
    return true;
};
