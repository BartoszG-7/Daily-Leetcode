class TreeInfo {
    constructor(height, balanced) {
        this.height = height;
        this.balanced = balanced;
    }
}
var isBalanced = function (root) {
    function isBalancedTreeHelper(root) {
        if (root == null) {
            return new TreeInfo(-1, true);
        }
        const left = isBalancedTreeHelper(root.left);
        if (!left.balanced) {
            return new TreeInfo(-1, false);
        }
        const right = isBalancedTreeHelper(root.right);
        if (!right.balanced) {
            return new TreeInfo(-1, false);
        }
        if (Math.abs(left.height - right.height) < 2) {
            return new TreeInfo(Math.max(left.height, right.height) + 1, true);
        }
        return new TreeInfo(-1, false);
    }
    return isBalancedTreeHelper(root).balanced;
};
