var isSymmetric = function (root) {
    return isMirror(root, root);
};
var isMirror = function (t1, t2) {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;
    return (
        t1.val === t2.val &&
        isMirror(t1.right, t2.left) &&
        isMirror(t1.left, t2.right)
    );
};
