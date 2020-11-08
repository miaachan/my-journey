function findTilt(root: TreeNode | null): number {
    if (root === null) return 0;
    let tilts = 0;
    dfs(root);
    return tilts;

    function dfs(node: TreeNode | null): number {
        if (node === null) return 0;
        let leftSum = dfs(node.left);
        let rightSum = dfs(node.right);
        tilts += Math.abs(leftSum - rightSum);
        return node.val + leftSum + rightSum;
    }
}
