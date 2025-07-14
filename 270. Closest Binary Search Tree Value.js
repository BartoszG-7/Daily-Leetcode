var closestValue = function(root, target) {
    let closest = [], minDiff = Infinity;

    function dfs(node){
        if (node === null)   return null;

        if (Math.abs(node.val - target ) <= minDiff) {
            minDiff = Math.abs(node.val - target);
            closest.push({ value : node.val, diff: minDiff });
        }

        if( target < node.val) {
            dfs(node.left);
        }
        if( target > node.val) {
            dfs(node.right);
        }
    }
dfs(root);
closest.sort((a,b)=> {
    if( a.diff === b.diff) {
        return a.value - b.value;
    } else {
        return a.diff-b.diff;
    }
});
return closest[0].value;
}
