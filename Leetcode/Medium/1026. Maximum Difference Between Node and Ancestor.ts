// my on9 dfs
function maxAncestorDiff(root: TreeNode | null): number {
    let maxDiff = 0;
    dfs(root);
    return maxDiff;

    function dfs(
        node: TreeNode | null
    ): {
        min: number;
        max: number;
    } {
        if (node === null)
            return {
                min: Number.MAX_SAFE_INTEGER,
                max: Number.MIN_SAFE_INTEGER,
            };

        // for node doesnt have any childs, return its own.
        if (node.left === null && node.right === null)
            return { min: node.val, max: node.val };

        let left = dfs(node.left);
        let right = dfs(node.right);

        let min = Math.min(left.min, right.min);
        let max = Math.max(left.max, right.max);

        let curDiff = Math.max(
            Math.abs(node.val - min),
            Math.abs(node.val - max)
        );

        maxDiff = Math.max(maxDiff, curDiff);

        return { min: Math.min(node.val, min), max: Math.max(node.val, max) };
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
