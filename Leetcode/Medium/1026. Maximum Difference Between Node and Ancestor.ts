// dfs
function maxAncestorDiff(root: TreeNode | null): number {
    let maxDiff = 0;
    dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    return maxDiff;

    function dfs(node: TreeNode | null, max: number, min: number): void {
        if (node === null) return;
        max = Math.max(node.val, max);
        min = Math.min(node.val, min);
        maxDiff = Math.max(maxDiff, max - min);
        dfs(node.left, max, min);
        dfs(node.right, max, min);
    }
}

// BFS solution from the community
function _maxAncestorDiff(root: TreeNode | null): number {
    function bfs(root: TreeNode | null, max: number, min: number): number {
        if (!root) return max - min;
        max = Math.max(max, root.val);
        min = Math.min(min, root.val);
        return Math.max(bfs(root.right, max, min), bfs(root.left, max, min));
    }
    return bfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
