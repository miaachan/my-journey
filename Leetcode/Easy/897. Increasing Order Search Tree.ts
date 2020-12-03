function increasingBST(root: TreeNode | null): TreeNode | null {
    let dummy_head = new TreeNode();
    let tail = dummy_head;
    dfs(root);

    return dummy_head.right;

    function dfs(node: TreeNode | null) {
        if (node === null) return;
        dfs(node.left);
        tail.right = new TreeNode(node.val);
        tail = tail.right;
        dfs(node.right);
    }
}
