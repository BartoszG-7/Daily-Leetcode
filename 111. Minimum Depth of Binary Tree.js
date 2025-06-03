var minDepth = function (root) {
    if (!root) {
        return 0;
    }
    let q = [root];
    let depth = 1;
    while (q.length) {
        let qSize = q.length;
        for (let i = 0; i < qSize; i++) {
            let node = q.shift();
            if (!node) {
                continue;
            }
            if (!node.left && !node.right) {
                return depth;
            }
            q.push(node.left);
            q.push(node.right);
        }
        depth++;
    }
    return -1;
};
