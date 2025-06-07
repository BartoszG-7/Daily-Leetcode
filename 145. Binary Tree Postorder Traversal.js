const postorderTraversal = (root) => {
    const result = [];
    if (!root) return result;

    const stack = [];
    let current = root;
    let lastVisited = null;

    while (stack.length || current) {
        if (current) {
            stack.push(current);
            current = current.left;
        } else {
            const peekNode = stack[stack.length - 1];
            if (peekNode.right && lastVisited !== peekNode.right) {
                current = peekNode.right;
            } else {
                result.push(peekNode.val);
                lastVisited = peekNode;
                stack.pop();
            }
        }
    }

    return result;
};